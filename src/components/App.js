import React from "react";
import Counter from "../components/Counter";

const App = () => {
  const testMessage = "Welcome to Setup Example";
  return (
    <div>
      <h1>{testMessage}</h1>
      <Counter />
    </div>
  );
};

export default App;
