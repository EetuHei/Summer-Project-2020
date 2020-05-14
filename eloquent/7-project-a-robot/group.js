class PGroup {
  constructor(data) {
    this.data = data || [];
  }

  // make copy of the old array
  add(val) {
    if (!this.has(val)) {
      return new PGroup(this.data.concat(val));
    } else {
      return this;
    }
  }

  // make copy of the old array and use filter to delte data in it
  delete(val) {
    if (this.has(val)) {
      return new PGroup(this.data.filter((d) => d !== val));
    } else {
      return this;
    }
  }

  // check if array has "x" data
  has(val) {
    return this.data.includes(val);
  }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
