// JavaScript Arrays
// Empty array
let emptyArr = [];
// Array of numbers
let numArray = [10, 20, 30, 40, 50];
// Array of strings
let strArray = ["apple", "banana", "orange"];
// Array with mixed data types
let mixedArray = [10, "apple", true, {key: "value"}];


// JavaScript Objects
let person = {
  name: "John",
  age: 30,
  isEmployed: true
};
// Accessing Object Properties
console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30
console.log(person.isEmployed);  // Output: true


// Iteration Methods and Array Functio
// a. for Loop-The basic for loop iterates over arrays or objects in a straightforward manner using the index.
for (let i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}
// Output: 10 20 30 40 50
// b. for...in Loop-The for...in loop is used to iterate over the keys of an object or the indices of an array.
//with array
let fruits = ["apple", "banana", "orange"];
for (let index in fruits) {
  console.log(index);  // Output: 0 1 2 (indices of the array elements)
}

//with object
let car = { brand: "Toyota", model: "Camry", year: 2021 };
for (let key in car) {
  console.log(key,'->',car[key]);
}
// Output:
// brand Toyota
// model Camry
// year 2021

// c. for...of Loop-The for...of loop is used to iterate over the values of an iterable (like arrays or strings).
let fruitss = ["apple", "banana", "orange","papaya"];
for (let fruit of fruitss) {
  console.log(fruitss);  // Output: apple banana orange papaya
}


// Array Functions
// a. forEach()-The forEach method executes a provided function once for each array element
let numbers = [10, 20, 30, 40];
numbers.forEach(function(num) {
  console.log(num);
});
// Output: 10 20 30 40

// b. map()-The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let numb = [1, 2, 3, 4, 5];
let doubled = numb.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


//filter() method-The filter() method creates a new array with all elements that pass the test implemented by the provided function.
let apll = [1, 2, 3, 4, 5];
let evenNumbers = apll.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


//find() method-The find() method returns the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
let numberr = [1, 2, 3, 4, 5];
let firstEven = numberr.find(num => num % 2 === 0);
console.log(firstEven); // 2


//reduce() method-The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let digits = [1, 2, 3, 4, 5];
let sum = digits.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15



//All implementation together
let people = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Jack', age: 35 },
  { name: 'Jill', age: 40 }
];

// 1. Use forEach() to print each person's name
people.forEach(person => console.log(person.name));

// 2. Use map() to create an array of ages
let ages = people.map(person => person.age);
console.log(ages); // [25, 30, 35, 40]

// 3. Use filter() to find people older than 30
let olderThan30 = people.filter(person => person.age > 30);
console.log(olderThan30);

// 4. Use find() to get the first person named 'Jane'
let jane = people.find(person => person.name === 'Jane');
console.log(jane);

// 5. Use reduce() to calculate the total age
let totalAge = people.reduce((accumulator, person) => accumulator + person.age, 0);
console.log(totalAge); // 130
