const isSubsequence = (str1, str2) => {
    let l1 = str1.length;
    let l2 = str2.length;
    if (l1 === 0 || l2 === 0) {
      return;
    }
    let x = 0,
      y = 0;
    while (x < l1 && y < l2) {
      if (str1[x] === str2[y]) {
        x++;
        y++;
      } else {
        y++;
      }
    }
    return x === l1;
  };
  
  const a = isSubsequence("axc", "ahbgdc");
  console.log(a);