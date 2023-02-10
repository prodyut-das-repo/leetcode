function sumZero(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // solution follows O(n*n)
      if (arr[i] + arr[j] === 0) {
        array.push([arr[i], arr[j]]);
      }
    }
  }
  return array;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 4, 5]));

const sunZeroNext = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let array = [];
  // solution follows O(n)
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      array.push([arr[left], arr[right]]);
    }
    sum > 0 ? right-- : left++;
  }
  return array;
};
console.log(sunZeroNext([-4, -3, -2, -1, 0, 1, 2, 4, 5]));
