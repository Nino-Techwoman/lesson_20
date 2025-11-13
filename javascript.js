// 1
function createArray(n) {
  const result = []; 
  for (let i = 1; i <= n; i++) {
    result.push(i); 
  }
  return result;
}

console.log(createArray(5)); 
console.log(createArray(10));


// 2

function backwardsNums(number) {
  let reversed = [];
  for (let i = number.length - 1; i >= 0; i--) {
    reversed.push(number[i]);
  }
  return reversed;
}

console.log(backwardsNums([1,2,3,4]));

// 3


function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([2, 6, 4, 3, 7, 5])); 


const numbers = [1, 2, 2, 2, 2, 3, 3, 3, 4];
const x = 2;


// 4
function countOccurrences(arr, x) {
  let count = 0;
  for (let num of arr) {
    if (num === x) {
      count++;
    }
  }
  return count;
}




console.log(countOccurrences(numbers, x));



// 5
const arr = ["კატა", "ძაღლი", "სპაგეტი", "ავტობუსი", "ტესტი"];
console.log(findLongestWord(arr));
function findLongestWord(words) {
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}












