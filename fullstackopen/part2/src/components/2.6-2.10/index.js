import React, { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState();
  const [filter, setFilter] = useState("");

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleFilterChange = (e) => setFilter(e.target.value);

  let newPersons = [...persons];
  if (filter)
    newPersons = newPersons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    persons.map((person) => person.name).includes(newName)
      ? alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat([{ name: newName, number: number }]));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h3>add a new</h3>
      <Form
        newName={newName}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons persons={newPersons} />
    </>
  );
};

export default Phonebook;
