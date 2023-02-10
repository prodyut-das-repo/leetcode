const sameFrequency = (num1, num2) => {
    if (num1.toString().length !== num2.toString().length) {
      return false;
    }
    let fre1 = {};
    let fre2 = {};
    for (let i of num1.toString()) {
      fre1[i] = (fre1[i] || 0) + 1;
    }
    for (let i of num2.toString()) {
      fre2[i] = (fre2[i] || 0) + 1;
    }
    console.log(fre1);
    console.log(fre2);
    for (let i of num2.toString()) {
      if (fre1[i] !== fre2[i]) {
        return false;
      }
    }
    return true;
  };
  let a = sameFrequency(42243, 4324);
  console.log(a);