const x = 10;
//x = 20;  // Error: Assignment to constant variable


const obj = { name: "John", age: 25 };
// You cannot reassign the object like this:
// This will throw an error!
//obj = { name: "Doe", age: 30 };  

// However, you can change the properties of the object:
obj.name = "Doe";  // This is allowed
obj.age = 30;  // This is also allowed

console.log(obj);  // { name: "Doe", age: 30 }







