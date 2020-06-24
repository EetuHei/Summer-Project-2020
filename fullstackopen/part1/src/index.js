import React from "react";
import ReactDOM from "react-dom";
import Basics from "./components/1.1-1.5/index.js";
import Unicafe from "./components/1.6-1.11/index";
import Anecdotes from "./components/1.12-1.14/index"
import CourseContents from "./components/2.1-2.5/components/Course/index"

const App = () => {
  return (
    <>
      {/* <Basics /> */}
      {/* <Unicafe /> */}
      {/* <Anecdotes /> */}
      <CourseContents />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
