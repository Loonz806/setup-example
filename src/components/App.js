import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
const Counter = lazy(() => import("./Counter"));

const App = () => {
  const testMessage = "Welcome to Setup Example";
  return (
    <div>
      <header>
        {/* messing up on purpose */}
        <h1>{testMessage}</h1>
      </header>
      <ErrorBoundary fallback={"An error has occurred at the App"}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* another mistake */}
          <main id="content">
            <Counter />
          </main>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
