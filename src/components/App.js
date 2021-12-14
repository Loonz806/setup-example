import React, { Suspense, lazy } from "react";
import Pokemon from "./Pokemon";
const Counter = lazy(() => import("./Counter"));

const App = () => {
  const testMessage = "Welcome to Setup Example";
  return (
    <div>
      <header>
        {/* messing up on purpose */}
        <h1>{testMessage}</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        {/* another mistake */}
        <main id="content">
          <Counter />
          <hr />
          <Pokemon />
        </main>
      </Suspense>
    </div>
  );
};

export default App;
