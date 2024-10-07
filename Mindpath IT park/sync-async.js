/*
//Synchronous
Definition: Synchronous code is executed line by line, meaning each operation must complete before the next one starts. This can make the code straightforward but can lead to delays if a task takes time (like fetching data).
Example:

console.log("Start");
console.log("Doing something...");
console.log("Done");

//Asynchronous
Definition: Asynchronous code allows operations to start and run in the background, enabling the program to continue executing other tasks without waiting. This is particularly useful for tasks that take time, like network requests. Promises are often used to handle the results of these operations once they're complete.
Example:
javascript
Copy code
console.log("Start");

// Simulating an asynchronous operation with a Promise
const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 2000); // Simulate a delay
});

fetchData.then((data) => {
    console.log(data); // This will run after 2 seconds
});

console.log("Doing something else..."); // This runs immediately
*/ 


async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
