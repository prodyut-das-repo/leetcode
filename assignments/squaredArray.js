const squaredArray = (arr1, arr2) => {
  //checking length first
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // This function follows O(n*n) time complexity
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};
let bool = squaredArray([2, 3, 1, 3, 5], [4, 1, 9, 25, 9]);
console.log(bool);
// inputs: [2,3,1,3,5], [4,1,9,25,9]
// if all squared values exist, return true else false

//for better performance here is another solution USING FREQUENCY COUNTER

const squaredArray1 = (arr1, arr2) => {
  //checking length first
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let item of arr1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1;
  }
  for (let item of arr2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
        return false;
    }
  }
  return true;
};

let bool1 = squaredArray1([2, 3, 1, 3, 5], [4, 1, 9, 25, 9]);
console.log(bool1);
