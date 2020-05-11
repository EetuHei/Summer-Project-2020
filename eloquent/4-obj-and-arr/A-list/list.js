const arrToList = (arr) => {
  let list;
  // reverse array, push data into nested list
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

const listToArr = (list) => {
  let arr = [];
  // node begings as list, while node is undefined it becomes node.rest.
  // this goes from outter most ti innermost sublist.
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

// assing keys and values.
const prepend = (value, list) => {
  return { value, rest: list };
};

const nth = (list, numb) => {
  if (!list) {
    return undefined;
    // if numb is 0, you can return what ever is at value.
    // it being the outermost list.
  } else if (numb === 0) {
    return list.value;
  } else {
    //  If numb is not 0, it refers to inner list.
    // pass in list.rest to get to the next layer down
    return nth(list.rest, numb - 1);
  }
};

console.log(arrToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArr(arrToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrToList([10, 20, 30]), 1));
// → 20
