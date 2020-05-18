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
    const next = (current) => {
        return anyStorage(nest, current, "scalpel").then(value =>
          value == current ? value : next(value));
    }
    return next(nest.name);
  }
  
  locateScalpel(bigOak).then(console.log);
  // → Butcher Shop
  locateScalpel2(bigOak).then(console.log);
  // → Butcher Shop