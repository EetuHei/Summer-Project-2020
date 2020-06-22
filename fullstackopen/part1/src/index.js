import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/1.1-1.5/Header";
import Content from "./components/1.1-1.5/Content";
import Total from "./components/1.1-1.5/Total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header data={course} />
      <Content data={course} />
      <Total data={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
