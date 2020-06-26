import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import axios from "axios";

const Phonebook = () => {
  const [persons, setPersons] = useState("");
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((res) => {
      console.log("promise fullified");
      setPersons(res.data);
    });
  }, []);
  console.log("render", persons.length, "notes");

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

  console.log(persons);

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
