import React from "react";
import useFetch from "../hooks/useFetch";

const Pokemon = () => {
  const { data, status, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  const renderView = () => {
    if (status === "fetching") {
      return <div>Loading...</div>;
    } else if (status === "fetched") {
      console.log("DATA", data);
      if (data) {
        return (
          <ul>
            <li>{data.name}</li>
            <li>{data.height}</li>
          </ul>
        );
      }
    } else if (status === "error") {
      return <div>{error}</div>;
    }
  };

  return (
    <div>
      Pokemon
      {renderView()}
    </div>
  );
};

export default Pokemon;
