import React, { useState } from "react";

const Anecdotes = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // get random anecdote
  const getRandom = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));
  };

  // vote currently diplayed anecdote
  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  //  find anecdote that has most votes
  const findMostVoted = () => votes.indexOf(Math.max(...votes));

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]} </p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => getRandom()}>next anecdote</button>
      <button onClick={() => vote()}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[findMostVoted()]}</p>
      <p>has {votes[findMostVoted()]} votes</p>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

export default Anecdotes;
