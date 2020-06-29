import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Phonebook from "./components/phonebook/index"
import Countries from "./components/2.12-2.14/index"

const App = () => {

  return (
    <>
      {/* <CourseContents /> */}
      <Phonebook  />
      {/* <Countries /> */}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
