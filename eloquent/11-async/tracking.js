async function locateScalpel(nest) {
    let current = nest.name
      for(;;){
        let next = await anyStorage(nest, current, "scalpel");
        if ( next == current) break;
        current = next;
    }
    return current;
  }
  
  function locateScalpel2(nest) {
    const loop = (current) => {
        return anyStorage(nest, current, "scalpel").then(value =>
          value == current ? value : loop(value));
    }
    return loop(nest.name);
  }
  
  locateScalpel(bigOak).then(console.log);
  // → Butcher Shop
  locateScalpel2(bigOak).then(console.log);
  // → Butcher Shop