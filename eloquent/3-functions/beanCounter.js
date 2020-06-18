const countChar = (str, char) => {
  return str.split(char).length - 1;
};

const countBs = (str) => {
  return countChar(str, "B");
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countChar("kakkerlakkerkakker", "k"));
// -> 8
