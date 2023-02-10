function averagePair(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
      let avg = (array[left] + array[right]) / 2;
      if (avg === target) {
        return true;
      } else if (avg > target) {
        right--;
      } else {
        left++;
      }
    }
    return false;
  }
  
  let a = averagePair([1, 2, 3], 2.5);
  console.log(a);