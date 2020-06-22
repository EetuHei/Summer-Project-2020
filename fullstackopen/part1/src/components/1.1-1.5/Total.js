import React from "react";

const Total = (props) => {
  let exeData = props.data.parts
    .map((data) => data.exercises)
    .reduce((a, b) => a + b);
  return (
    <>
      <p>Number of exercises: {exeData}</p>
    </>
  );
};

export default Total;
