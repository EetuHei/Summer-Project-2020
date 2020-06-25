import React from "react";

const Form = ({
  newName,
  number,
  handleNameChange,
  handleNumberChange,
  handleSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(e) => {
            handleNameChange(e);
          }}
        />
        <div>
          number:{" "}
          <input
            value={number}
            onChange={(e) => {
              handleNumberChange(e);
            }}
          />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
