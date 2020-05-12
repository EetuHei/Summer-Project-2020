class Group {
  constructor() {
    this.arr = [];
  }

  // add values to array
  add(val) {
    !this.has(val) ? this.arr.push(val) : "";
  }

  // filter out values from array
  delete(val) {
    this.arr = this.arr.filter((i) => i !== val);
  }

  // checks array if it has value inside it
  has(val) {
    return this.arr.includes(val);
  }

  // create new object for group with values 10 & 20
  // loop the array to separate the values inside the array
  static from(collection) {
    let group = new Group();
    for (let val of collection) {
      group.add(val);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
