import React from "react";
import Join from "./components/Join";
import Monthly from "./components/Monthly";
import Why from "./components/Why";

const App = () => {
  return (
    <>
      <div className="container">
        <Monthly />
        <Why />
        <Join />
      </div>
    </>
  );
};

export default App;
