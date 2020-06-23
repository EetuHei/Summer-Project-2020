import React from "react";
import ReactDOM from "react-dom";
import Basics from "./components/1.1-1.5/index.js"
import Unicafe from "./components/1.6-/index";

const App = () => {
  return (
    <>
      {/* <Basics /> */}
      <Unicafe />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
