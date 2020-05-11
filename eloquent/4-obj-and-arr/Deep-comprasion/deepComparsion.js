const deepEqual = (obj1, obj2) => {
  // get properties from objects
  let keysObj1 = Object.keys(obj1),
    keysObj2 = Object.keys(obj2);
  // fisrt check if obj1 and obj2 are same type and value.
  if (obj1 === obj2) {
    return true;
    // if length of obj keys don't match return false
  } else if (keysObj1.length != keysObj2.length) {
    return false;
  } else if (obj1 && obj2) {
    // loop to go through keys in obj1
    for (let key of keysObj1) {
      // check if obj2 keys is not equal to obj1 keys
      // or boolean of deepEqual function for obj keys as array
      if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key]))
        return false;
    }
    return true;
  }
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
