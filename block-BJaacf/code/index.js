// 1. Create an array named numbers and store 5 number values in it

let numbers =[12, 23, 33, 42, 54];

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()

let avg = sum / 5;
console.log(`The average is ${avg}`);

// 4. Find the highest number in the array and print it to the console using console.log()

let highest = 0;
for (let i = 0; i < numbers.length; i++){
  if(numbers[i] > highest){
    highest = numbers[i];
  }
}
console.log(`The highest number is ${highest}`);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowest = numbers[0];
for (let i = 0; i < numbers.length; i++){
  if(numbers[i] < lowest){
    lowest = numbers[i];
  }
}
console.log(`The lowest number is ${lowest}`);

// 6. Find the even numbers in the array and print them to the console using console.log()

let even = [];
for (let number of numbers) {
  if(number % 2 === 0) {
    even.push(number);
  }
}
console.log(even)

// 7. Find the odd numbers in the array and print them to the console using console.log()

let odd = [];
for (let number of numbers) {
  if(number % 2 !== 0) {
    odd.push(number);
  }
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let divByFive = [];
for(let number of numbers) {
  if(number % 5 === 0) {
    divByFive.push(number);
  }
}
console.log(divByFive);

// 9. Log all the element of the array one by one

for (let number of numbers) {
  console.log(number);
}

// 10. Find all the number in the array that is divisible by 3

let divByThree = [];
for (let number of numbers) {
  if(number % 3 === 0) {
    divByThree.push(number);
  }
}
console.log(divByThree);