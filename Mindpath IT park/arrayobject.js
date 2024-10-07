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
for (let aa of fruitss) {
  console.log(aa);  // Output: apple banana orange papaya
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


// common JavaScript array methods
let vegetables = ["carrot", "broccoli", "spinach"];


// 1. push()
vegetables.push("pepper");
console.log(vegetables); // Output: ["carrot", "broccoli", "spinach", "pepper"]

// 2. pop()
let lastVegetable = vegetables.pop();
console.log(lastVegetable); // Output: "pepper"
console.log(vegetables);    // Output: ["carrot", "broccoli", "spinach"]

// 3. shift()-Removes the first element from the array and returns that element.
let firstVegetable = vegetables.shift();
console.log(firstVegetable); // Output: "carrot"
console.log(vegetables);      // Output: ["broccoli", "spinach"]

// 4. unshift()
// Adds one or more elements to the beginning of the array.

vegetables.unshift("lettuce");
console.log(vegetables); // Output: ["lettuce", "broccoli", "spinach"]

// 5. splice()
// Adds or removes elements from an array at a specified index.
vegetables.splice(1, 1, "cabbage"); // Remove 1 element at index 1 and add "cabbage"
console.log(vegetables);             // Output: ["lettuce", "cabbage", "spinach"]


// 6. slice()
// Returns a shallow copy of a portion of an array.
let leafyVegetables = vegetables.slice(1, 3);
console.log(leafyVegetables); // Output: ["cabbage", "spinach"]

// 7. concat()
// Merges two or more arrays.
let rootVegetables = ["carrot", "beet"];
let allVegetables = vegetables.concat(rootVegetables);
console.log(allVegetables); // Output: ["lettuce", "cabbage", "spinach", "carrot", "beet"]

// 8. join()
// Joins all elements of an array into a string.
let vegetableString = allVegetables.join(', ');
console.log(vegetableString); // Output: "lettuce, cabbage, spinach, carrot, beet"


// 9. forEach()
// Executes a provided function once for each array element.
allVegetables.forEach(veg => console.log(veg));
/*
Output:
lettuce
cabbage
spinach
carrot
beet
*/


// 10. map()
// Creates a new array with the results of calling a provided function on every element.
let upperVegetables = allVegetables.map(veg => veg.toUpperCase());
console.log(upperVegetables); // Output: ["LETTUCE", "CABBAGE", "SPINACH", "CARROT", "BEET"]

// 11. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
let greenVegetables = allVegetables.filter(veg => veg.includes("c"));
console.log(greenVegetables); // Output: ["cabbage", "carrot"]


// 12. reduce()
// Executes a reducer function on each element of the array, resulting in a single output value.
let totalLength = allVegetables.reduce((total, veg) => total + veg.length, 0);
console.log(totalLength); // Output: 27 (sum of lengths of all vegetable names)

// 13. find()
// Returns the value of the first element that satisfies the provided testing function.
let foundVegetable = allVegetables.find(veg => veg.startsWith('b'));
console.log(foundVegetable); // Output: "beet"

// 14. sort()
// Sorts the elements of an array in place and returns the sorted array.
allVegetables.sort();
console.log(allVegetables); // Output: ["beet", "cabbage", "carrot", "lettuce", "spinach"]

// 15. reverse()
// Reverses the order of the elements of an array in place.
allVegetables.reverse();
console.log(allVegetables); // Output: ["spinach", "lettuce", "carrot", "cabbage", "beet"]


// Properties of Arrays
// 1. length
// Returns the number of elements in an array.
console.log(allVegetables.length); // Output: 5

// 2. indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = allVegetables.indexOf('carrot');
console.log(index); // Output: 2


// 3. includes()
// Determines whether an array includes a certain value among its entries.
let hasSpinach = allVegetables.includes('spinach');
console.log(hasSpinach); // Output: true
