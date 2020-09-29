import React from "react";
import Counter from "../components/Counter";

const App = () => {
  const testMessage = "Hello Application Alpha";
  return (
    <div>
      <h1>{testMessage}</h1>
      <Counter />
    </div>
  );
};

export default App;
