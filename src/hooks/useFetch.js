import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // will need an url or exit early
    if (!url) {
      setStatus("error");
      setError("Error Occurred: No url was provided");
      return;
    }
    // using this rather than axios, its time, IE is dead
    const fetchData = async () => {
      let data;
      setStatus("fetching");
      if (cache.current[`${url}`]) {
        data = cache.current[`${url}`];
        setData(data);
        setStatus("fetched");
      } else {
        try {
          const response = await fetch(url);
          if (response.status === 200) {
            data = await response.json();
          } else {
            setStatus("error");
            setError(`Error Occurred: `, response.status, data);
            console.error("Error occurred:", response.status, data);
          }
        } catch (e) {
          setStatus("error");
          setError(`Error Occurred: `, e);
          console.error("Error occurred:", e);
        }
        setData(data);
        setStatus("fetched");
      }
    };
    fetchData();
    // if the url changes, refetch
  }, [url]);
  return { status, data, error };
};

export default useFetch;
