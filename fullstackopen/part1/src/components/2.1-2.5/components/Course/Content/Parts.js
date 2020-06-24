import React from "react";

const Parts = ({ partsInfo }) => {
  return (
    <p>
      {partsInfo.name} {partsInfo.exercises}
    </p>
  );
};

export default Parts;
