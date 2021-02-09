import React, { Suspense, lazy } from "react";
import ErrorBoundry from "./ErrorBoundry";
const Counter = lazy(() => import("./Counter"));

const App = () => {
  const testMessage = "Welcome to Setup Example";
  return (
    <div>
      <h1>{testMessage}</h1>
      <ErrorBoundry>
        <Suspense fallback={<div>Loading...</div>}>
          <Counter />
        </Suspense>
      </ErrorBoundry>
    </div>
  );
};

export default App;
