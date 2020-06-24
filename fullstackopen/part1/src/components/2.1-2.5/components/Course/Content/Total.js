import React from "react";

const Total = ({ parts }) => {
  const sum = parts.reduce((a, b) => a + b.exercises, 0);

  return (
    <>
      <p style={{ fontWeight: "bold" }}>Total of {sum} exercises</p>
    </>
  );
};

export default Total;
