import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Services from "./services/Index";

const Phonebook = () => {
  const [persons, setPersons] = useState("");
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState();
  const [filter, setFilter] = useState("");
  const [reFetch, setReFetch] = useState(null);

  useEffect(() => {
    Services.GetAll().then((res) => setPersons(res));
    if (reFetch) {
      Services.GetAll().then((res) => setPersons(res));
      setReFetch(false);
    }
  }, [reFetch]);
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

    if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one ?`
        )
      ) {
        let findPerson = persons.find((person) => person.name === newName);
        Services.Update(findPerson.id, { name: newName, number: number });
        setReFetch(true);
      } else {
      }
    } else {
      setPersons(
        persons.concat(Services.Create({ name: newName, number: number }))
      );
      setReFetch(true);
    }
  };

  const handleDelete = (id) => {
    let findPerson = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${findPerson.name} ?`)) {
      Services.Delete(id);
      setReFetch(true);
    } else {
      alert(`${findPerson.name} has not been deleted.`);
    }
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
      <Persons persons={newPersons} handleDelete={handleDelete} />
    </>
  );
};

export default Phonebook;
