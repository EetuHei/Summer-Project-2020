import React from "react";
import Part from "./Parts";

const Content = ({ parts }) => {
  const partList = parts.map((parts) => (
    <Part key={parts.id} partsInfo={parts} />
  ));
  return <>{partList}</>;
};

export default Content;
