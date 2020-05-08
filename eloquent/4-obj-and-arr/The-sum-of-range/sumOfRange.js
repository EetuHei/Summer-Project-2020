const range = (start, end, step) => {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  }
  return arr;
};

const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

console.log(range(1, 10), "Range from 1 -> 10");
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1), "Range with negative step");
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)), "Sum of range 1 -> 10, 1+2+3...8+9+10");
// → 55
console.log(range(1, 10, 2), "Range with positive step");
// -> [1, 3, 5, 7 ,9]