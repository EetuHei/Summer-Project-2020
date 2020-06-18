const isEven = (numb) => {
  // convert numb to be absolute to remove stack error when input is negative
  numb = Math.abs(numb);
  if (numb === 0) {
    return true;
  } else if (numb === 1) {
    return false;
  } else {
    return isEven(numb - 2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
console.log(isEven(-2));
// -> true
