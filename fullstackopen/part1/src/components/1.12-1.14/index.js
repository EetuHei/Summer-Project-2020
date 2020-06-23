import React, { useState } from "react";

const Anecdotes = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    { quote: "If it hurts, do it more often", votes: 0 },
    {
      quote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      quote:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      quote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    { quote: "Premature optimization is the root of all evil.", votes: 0 },
    {
      quote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
  ];

  const getRandom = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));
  };

  const vote = () => {};

  console.log(anecdotes);
  console.log(anecdotes[selected]);
  return (
    <>
      <p>{anecdotes[selected].quote} </p>
      <button onClick={() => getRandom()}>next anecdote</button>
      <button onClick={() => vote()}>vote</button>
    </>
  );
};

export default Anecdotes;
