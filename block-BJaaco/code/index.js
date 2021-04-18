let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`

let collection = [];
let sumNumbers = 0, sumUserIds = 0;
for (let number of numbers) {
  sumNumbers += number;
}
for (let userId of userIds) {
  sumUserIds += userId;
}

let totalSum = sumNumbers + sumUserIds;
collection.push(totalSum);
console.log(collection);

// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`

let evenCollection = [];
let evenSumNumbers = 0, evenSumUserIds = 0;
for (let number of numbers) {
  if(number % 2 === 0) {
    evenSumNumbers += number;
  }
}
for (let userId of userIds) {
  if(userId % 2 === 0) {
    evenSumUserIds += userId;
  }
}
let evenTotalSum = evenSumNumbers + evenSumUserIds;
evenCollection.push(evenTotalSum);
console.log(evenCollection);

// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`

let oddCollection = [];
let oddSumNumbers = 0, oddSumUserIds = 0;
for (let number of numbers) {
  if(number % 2 !== 0) {
    oddSumNumbers += number;
  }
}
for (let userId of userIds) {
  if(userId % 2 !== 0) {
    oddSumUserIds += userId;
  }
}
let oddTotalSum = oddSumNumbers + oddSumUserIds;
oddCollection.push(oddTotalSum);
console.log(oddCollection);

/*
  @param means parameter

 4. Write a function named times which accepts two parameter and return an array. 

  @param times (number)
  @param character (string)
  @return array
 
  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/

function times(time, character = "test") {
    let arr =[];
    for(let i = 0; i < time; i++){
      arr.push(character);
    }
    return arr;
}

// Uncomment the code below and test the output

// console.log(times(5, 'c')); // ['c', 'c', 'c', 'c', 'c']
// console.log(times(2, 'a')); // ['a', 'a']
// console.log(times(0)); // []
// console.log(times(5)); // ['test', 'test', 'test', 'test', 'test']

/*

 5. Write a function named revert which reverts the element of the input array. 

  @param arr (array)
  @return array

  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function revert(input) {
  let arr = [];
  for(let i = 0; i <= input.length; i++) {
    arr.push(input.pop());
  }
  return arr;
}

// Uncomment the code below and test the output
// console.log(revert([1, 2, 3, 4])); // [4, 3, 2, 1]
// console.log(revert(['a', 'd', 'c', 'b'])); // ['b', 'c', 'd', 'a']
// console.log(revert(['Ryan', 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  

  @param arr (array)
  @return array

  Example: 
    clear([1, 2, 3, 4, '', 0, null, undefined]); // [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/
function clear(array){
  let newArr = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] == undefined || array[i] == false || array[i] == 0 || array[i] == null || array[i] == ""){
       delete array[i];
    }
    else {
      newArr.push(array[i])
    }
    
  }
  return newArr;
}

// Uncomment the code below and test the output
// console.log(clear([1, 2, 3, 4, '', 0, null, undefined])); // [4, 3, 2, 1]
// console.log(clear(['a', undefined, 'd', 0, 'c', 'b'])); // ['b', 'c', 'd', 'a']
// console.log(clear(['Ryan', null, 0, 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/

function arrayToObj(array) {
  let obj = {};
  for(let i = 0; i < array.length; i++){
    obj[i] = array[i];
  }
  return obj;
}


// Uncomment the code below and test the output
// console.log(arrayToObj([1, 2, 3, 4])); // {0: 1, 1: 2, 2: 3, 3: 4}
// console.log(arrayToObj(['a', undefined, 'd'])); // {0: 'a', 1: undefined, 2: 'd'}
// console.log(arrayToObj(['Ryan', 'John'])); // {0: 'Ryan', 1: 'John'}
