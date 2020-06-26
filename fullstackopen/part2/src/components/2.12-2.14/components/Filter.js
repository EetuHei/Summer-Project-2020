import React from "react";

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      find countries 
      <input
        value={filter}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
};

export default Filter;
