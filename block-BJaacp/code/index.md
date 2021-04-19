1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]` // false; Each array has different memory address
- What is the value of obj? // {surname: "Stark"}
- `obj == newObj` // false; Both objects have different memory addresses as well as values 
- `obj === newObj` // false; Different addresses
- `user === newObj` // false; Different addresses
- `user == newObj` // false; Different addresses
- `user == obj` // true; user object points to same address as ob
- `arr == arr2` // true; arr2 array points to same address as arr array
- `arr === arr2` // true; arr2 array points to same address as arr array

2. What will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- To add this image here use ![name](./hello.jpg) -->

![Memory](./memory.png)

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);
console.log(person2);
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); // true
console.log(user.brothers.length === brothers.length); // true
```
