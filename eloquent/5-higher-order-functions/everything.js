const every = (arr, condition) => {
  for (let element of arr) {
    if (!condition(element)) return false;
  }
  return true;
};

const every2 = (arr, condition) => {
  return !arr.some((element) => !condition(element));
};

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

console.log(every2([1, 3, 5], (n) => n < 10));
// → true
console.log(every2([2, 4, 16], (n) => n < 10));
// → false
console.log(every2([], (n) => n < 10));
// → true
