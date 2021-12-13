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
      let d;
      setStatus("fetching");
      if (cache.current[`${url}`]) {
        d = cache.current[`${url}`];
        setData(d);
        setStatus("fetched");
      } else {
        try {
          const response = await fetch(url);
          if (response.status === 200) {
            d = await response.json();
          } else {
            setStatus("error");
            setError(`Error Occurred: `, response.status, d);
            console.error("Error occurred:", response.status, d);
          }
        } catch (e) {
          setStatus("error");
          setError(`Error Occurred: `, e);
          console.error("Error occurred:", e);
        }
        setData(d);
        setStatus("fetched");
      }
    };
    fetchData();
    // if the url changes, refetch
  }, [url]);
  return { status, data, error };
};

export default useFetch;
