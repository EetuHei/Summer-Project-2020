const loop = (init, condition, repetition, action) => {
  for (let value = init; condition(value); value = repetition(value)) {
    action(value);
  }
};

loop(
  3, // init
  (n) => n > 0, // condition
  (n) => n - 1, // repetition
  console.log // action
);
// → 3
// → 2
// → 1
