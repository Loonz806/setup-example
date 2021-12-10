import React from "react";
import useFetch from "../hooks/useFetch";

const StarWars = () => {
  const { data, status, error } = useFetch("https://swapi.dev/api/people/1");

  const renderView = () => {
    if (status === "fetching") {
      return <div>Loading...</div>;
    } else if (status === "fetched") {
      if (data) {
        return (
          <ul>
            <li>{data.name}</li>
            <li>{data.gender}</li>
          </ul>
        );
      }
    } else if (status === "error") {
      return <div>{error}</div>;
    }
  };

  return (
    <div>
      StarWars
      {renderView()}
    </div>
  );
};

export default StarWars;
