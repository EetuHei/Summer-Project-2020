let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty("one"));

// Calls a method of an object, substituting another object for the current object.
console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true