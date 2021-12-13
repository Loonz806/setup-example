import { renderHook } from "@testing-library/react-hooks";
import fetch from "isomorphic-fetch";
import useFetch from "../hooks/useFetch";

global.fetch = fetch;

test("should fail if no url is provided", async () => {
  const { result } = renderHook(() => useFetch());
  expect(result.current.status).toBeDefined();
  expect(result.current.status).toBe("error");
  expect(result.current.data).toBeDefined();
  expect(result.current.data).toStrictEqual([]);
  expect(result.current.error).toBeDefined();
  expect(result.current.error).toBeTruthy();
  expect(result.current.error).toBe("Error Occurred: No url was provided");
});

test("allows you to call apis", async () => {
  const { result } = renderHook(() =>
    useFetch("https://api.github.com/users/octocat")
  );
  expect(result.current.status).toBeDefined();
  expect(result.current.status).toBe("fetching");
  expect(result.current.data).toBeDefined();
  expect(result.current.data).toStrictEqual([]);
  expect(result.current.error).toBeUndefined();
  expect(result.current.error).toBeFalsy();
});
