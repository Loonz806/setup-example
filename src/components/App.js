import React, { Suspense, lazy } from "react";
const Counter = lazy(() => import("./Counter"));

const App = () => {
  const testMessage = "Welcome to Setup Example";
  return (
    <div>
      <h1>{testMessage}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Counter />
      </Suspense>
    </div>
  );
};

export default App;
