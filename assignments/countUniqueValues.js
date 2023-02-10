const countUniqueValues = (arr) => {
  let frequencyCounter1 = {};
  for (let char of arr) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  return Object.keys(frequencyCounter1).length;
};

countUniqueValues([-1, 23, 1, 1, 3, 1, 2, 4, 5]);

// By using two pointers

const countUniqueValuesByTwoPointers = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
    }
    if (arr[i] === arr[j]) {
      j++;
    }
  }
  console.log(i);
};
countUniqueValuesByTwoPointers([-1, 23, 1, 1, 3, 1, 2, 4, 5]);
