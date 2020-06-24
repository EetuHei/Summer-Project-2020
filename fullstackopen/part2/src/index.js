import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Phonebook from "./components/2.6-2.10/index";

const App = () => {

  return (
    <>
      {/* <CourseContents /> */}
      <Phonebook  />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
