import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CourseContents from "./components/2.1-2.5/components/Course/index";

const App = () => {
  return (
    <>
      <CourseContents />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
