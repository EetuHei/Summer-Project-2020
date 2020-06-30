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
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    Services.GetAll().then((res) => setPersons(res));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const personObj = {
      name: newName,
      number: number,
      id: persons.length + 1,
    };

    Services.Create(personObj).then((returenedPerson) => {
      setPersons(returenedPerson);
      setNewName("");
    });

    if (persons.map((person) => person.name).includes(newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one ?`
        )
      ) {
        let findPerson = persons.find((person) => person.name === newName);
        Services.Update(findPerson.id, {
          name: newName,
          number: number,
        }).then((res) => setPersons(res));
        setNewName("");
        setNumber("");
      }
    } else {
      Services.Create(personObj).then((returenedPerson) => {
        setPersons(returenedPerson);
        setNewName("");
        setNumber("");
      });
    }
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      Services.Delete(person.id)
        .then((res) => console.log("Deleted", res))
        .catch((e) => {
          if (e) {
            setErrorMessage(
              `${person.name} data has already been deleted from the server `
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            throw e;
          }
        });
      const updatePersons = persons.filter((p) => p.id !== person.id);
      setPersons(updatePersons);
    } else {
      setErrorMessage(`${person.name} was not deleted from phonebook`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} style={Style} />
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
