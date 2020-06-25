import React from "react";

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
      filter show with
      <input
        value={filter}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default Filter;
