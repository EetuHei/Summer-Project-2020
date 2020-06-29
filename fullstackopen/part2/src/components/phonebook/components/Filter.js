import React from "react";

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      filter show with
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
