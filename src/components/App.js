import React, { Suspense, lazy } from "react";
const Counter = lazy(() => import("./Counter"));

const App = () => {
  const testMessage = "Welcome to Setup Example";
  return (
    <div>
      <header>
        <h1>{testMessage}</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main id="content">
          <Counter />
        </main>
      </Suspense>
    </div>
  );
};

export default App;
