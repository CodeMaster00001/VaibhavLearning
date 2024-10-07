// Function that accepts a callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Hello, World!";
        callback(data);
    }, 1000); // Simulate an async operation with setTimeout
}

// Using the callback
fetchData((data) => {
    console.log(data); // Output after 1 second: Hello, World!
});


// Handling errors in Callback
function fetchData(callback) {
    setTimeout(() => {
        const error = null; // or new Error("Something went wrong");
        const data = "Hello, World!";
        callback(error, data);
    }, 1000);
}

// Using the callback with error handling
fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    console.log(data); // Output after 1 second: Hello, World!
});


// Custom callback functions
function processData(data, callback) {
    console.log("Processing data:", data);
    callback(); // Invoke the callback after processing
}

function onProcessingComplete() {
    console.log("Data processing complete.");
}

processData("Sample Data", onProcessingComplete);


// Existing Callback functions
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});


// Disadvantages of Callback
doSomething((err, result1) => {
    if (err) {
        console.error(err);
        return;
    }
    doSomethingElse(result1, (err, result2) => {
        if (err) {
            console.error(err);
            return;
        }
        doAnotherThing(result2, (err, result3) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(result3);
        });
    });
});


// DISADVANTAGES-:
/*Callbacks in JavaScript are a fundamental concept for handling asynchronous operations, but they come with several disadvantages:

Callback Hell: When you have multiple nested callbacks, the code can become hard to read and maintain. This situation is often referred to as "callback hell" or "pyramid of doom."
javascript
Copy code
asyncFunction1((result1) => {
    asyncFunction2(result1, (result2) => {
        asyncFunction3(result2, (result3) => {
            // ...and so on
        });
    });
});
Error Handling: Managing errors in a callback-based approach can be cumbersome. You often have to handle errors at each level of nesting, which can lead to duplicated code.
javascript
Copy code
asyncFunction1((err, result1) => {
    if (err) return handleError(err);
    asyncFunction2(result1, (err, result2) => {
        if (err) return handleError(err);
        // ...and so on
    });
});
Inversion of Control: With callbacks, you're passing control of your code to an external function, which can lead to unpredictable behavior if the callback function is not executed in the expected order or timing.
Difficult to Manage State: Maintaining state across multiple callbacks can be tricky, especially when you have to share variables or results between them.
Limited Composition: Combining multiple asynchronous operations can be more challenging with callbacks. It's not as straightforward to chain them or compose them into more complex behaviors.
Performance Issues: In some scenarios, excessive callbacks can lead to performance bottlenecks, especially if they are not properly managed or optimized.
Alternatives
To mitigate these issues, modern JavaScript provides alternatives like Promises and async/await syntax, which allow for more readable and maintainable asynchronous code. These approaches help flatten the callback structure and simplify error handling.
*/
