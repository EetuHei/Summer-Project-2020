specialForms.set = (args, scope) => {
  // Check that the set is being used correctly
   if(args.length != 2 || args[0].type != "word"){
      throw new SyntaxError("Bad use of set");
   }
   // get setx value
   let value = evaluate(args[1], scope)
   //get args names (x and quux)
   let argsName = args[0].name;

   // loop to interate scope
   for (let scopeVal = scope; scopeVal; scopeVal = Object.getPrototypeOf(scopeVal)) {
      // check for scopeVal and argsName
      if (Object.prototype.hasOwnProperty.call(scopeVal, argsName)) {
         // set value and return it
        scopeVal[argsName] = value;
        return value;
      }
    }
    // throw reference error if undefined variable
    throw new ReferenceError(`Variable ${argsName} not defined`); 

 };
  
  run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
  // → 50
  run(`set(quux, true)`);
  // → Some kind of ReferenceError