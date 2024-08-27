import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Fallback from "./Fallback";
const Counter = lazy(() => import("./Counter"));

const App = () => {
  const testMessage = "Welcome to Setup Example";
  return (
    <div>
      <header>
        {/* messing up on purpose */}
        <h1 className="red">{testMessage}</h1>
      </header>
      <ErrorBoundary fallback={Fallback}>
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
