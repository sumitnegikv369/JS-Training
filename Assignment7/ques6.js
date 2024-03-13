// ? 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolved");
    }, 2000)
});

const resolvedPromise = async () => {
    const result = await p1;
    return result;
}

resolvedPromise()
    .then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    });