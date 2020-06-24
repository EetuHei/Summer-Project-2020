import React, { useState } from "react";
const Phonebook = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (e) => setNewName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(persons, "persons arr data")

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(e) => {
              handleNameChange(e);
            }}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>{" "}
    </>
  );
};

export default Phonebook;
