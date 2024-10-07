

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = null;
            const data = "Hello, World!";
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        }, 1000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));


    // Using Async/Await
    async function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const error = null;
                const data = "Hello, World!";
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            }, 1000);
        });
    }
    
    async function processData() {
        try {
            const data = await fetchData();
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    processData();


    // 1. Promise.all
// Definition: Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or rejects if any of the promises reject.

const firstPromise = Promise.resolve(1);
const secondPromise = Promise.resolve(2);
const thirdPromise = Promise.resolve(3);

Promise.all([firstPromise, secondPromise, thirdPromise])
    .then((results) => {
        console.log(results); // [1, 2, 3]
    })
    .catch((error) => {
        console.error("One of the promises failed:", error);
    });
// Note: If any promise rejects, the whole Promise.all will reject immediately.
// 2. Promise.any
// Definition: Promise.any takes an iterable of Promise objects and, unlike Promise.all, it resolves as soon as one of the promises in the iterable resolves. If no promises resolve (i.e., all reject), it rejects with an AggregateError, which is a new error type that groups together individual errors.
// Usage:
const failedPromise1 = Promise.reject(new Error("Failure 1"));
const failedPromise2 = Promise.reject(new Error("Failure 2"));
const successfulPromise = new Promise((resolve) => setTimeout(resolve, 100, "Success!"));

Promise.any([failedPromise1, failedPromise2, successfulPromise])
    .then((result) => {
        console.log(result); // "Success!"
    })
    .catch((error) => {
        console.error("All promises failed:", error);
    });
// Note: Promise.any is useful when you want to get the first successful result and don't care about the rest.
// 3. Promise Chaining
// Definition: Promise chaining allows you to chain multiple .then() calls, where each .then() returns a new promise. This makes it easier to handle sequences of asynchronous operations.

const fetchDataFromServer = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
};

fetchDataFromServer()
    .then((data) => {
        console.log(data); // "Data fetched!"
        return "Processing data...";
    })
    .then((result) => {
        console.log(result); // "Processing data..."
        return "Data processed!";
    })
    .then((finalResult) => {
        console.log(finalResult); // "Data processed!"
    })
    .catch((error) => {
        console.error("Error:", error);
    });
//Note: Each .then() can return a new promise, which allows you to handle asynchronous operations in sequence and also handle errors using .catch() at the end of the chain.
//Summary//
// Promise.all: Resolves when all promises are resolved; rejects if any promise fails.
// Promise.any: Resolves as soon as one promise is resolved; rejects if all fail.
// Promise chaining: Allows sequencing of asynchronous operations by linking multiple .then() calls.



    