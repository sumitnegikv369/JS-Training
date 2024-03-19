// ? 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolved");
    }, 1000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolved");
    }, 3000)
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolved");
    }, 2000)
});
async function getAllData() {
    const data = await Promise.all([p1, p2, p3]);
    return data;
}

getAllData()
    .then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log(error);
    });