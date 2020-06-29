import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Services from "./services/Index";
import Notification from "./components/Notification";
import Style from "./index.module.css";

const Phonebook = () => {
  const [persons, setPersons] = useState("");
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState();
  const [filter, setFilter] = useState("");
  const [reFetch, setReFetch] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

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
        let findPerson = newPersons.find((person) => person.name === newName);
        Services.Update(findPerson.id, { name: newName, number: number });
        setMessage(`Updated phone number for person ${newName}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setReFetch(true);
      }
    } else {
      setPersons(
        persons.concat(Services.Create({ name: newName, number: number }))
      );
      setMessage(`${newName} was added to phobebook`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      setReFetch(true);
    }
  };

  const handleDelete = (id) => {
    let findPerson = newPersons.find((person) => person.id === id);

    if (window.confirm(`Delete ${findPerson.name} ?`)) {
      Services.Delete(id).catch((e) => {
        if (e) {
          setErrorMessage(
            `${findPerson.name} data has already been deleted from the server `
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          throw e;
        }
      });
      setReFetch(true);
    } else {
      setErrorMessage(`${findPerson.name} was not deleted from phonebook`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification
        message={message}
        errorMessage={errorMessage}
        style={Style}
      />
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
