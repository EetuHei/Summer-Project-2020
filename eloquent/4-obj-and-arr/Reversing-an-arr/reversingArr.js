const reverseArray = (arr) => {
  return arr.reverse();
};

const reverseArrayInPlace = (arr) => {
  return arr.reverse();
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// whitout .reverse();
const reverseArray2 = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const reverseArrayInPlace2 = (arr) => {
  for (let i = 0; i <= arr.length / 2; i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
};

console.log(reverseArray2(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue2 = [1, 2, 3, 4, 5];
reverseArrayInPlace2(arrayValue2);
console.log(arrayValue2);
// → [5, 4, 3, 2, 1]
