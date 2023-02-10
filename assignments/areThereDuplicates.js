const areThereDuplicates = (...arg) => {
    let fre1 = {};
    for (let i of arg) {
      fre1[i] = (fre1[i] || 0) + 1;
    }
    console.log(fre1);
    for (let i in fre1) {
      if (fre1[i] > 1) {
        return true;
      }
    }
    return false;
  };
  
  let a = areThereDuplicates("a", "sd");
  console.log(a);
  //areThereDuplicates Solution (Frequency Counter)
  function areThereDuplicates1() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }
  //areThereDuplicates Solution (Multiple Pointers)
  function areThereDuplicates2(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
  //areThereDuplicates One Liner Solution
  function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
  }