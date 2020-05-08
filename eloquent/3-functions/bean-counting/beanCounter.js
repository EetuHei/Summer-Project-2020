const countChar = (str, char) => {
  return str.split(char).length - 1;
};

const countBs = (str) => {
  return str.split("B").length - 1;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countChar("kakkerlakkerkakker", "k"));
// -> 8
