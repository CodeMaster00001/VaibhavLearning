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
    