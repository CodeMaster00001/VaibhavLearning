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
