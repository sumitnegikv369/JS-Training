// ? 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

function combineData(data){
    const id = data[0].userId;
    const username = data[1].username;
    const email = data[2].email;
    return `#${id}: ${username} -> ${email}`;
}

async function fetchDataParallel(apiUrls, combineData) {
    const promises = [];

    for (const url of apiUrls) {
        promises.push(fetch(url).then(response => response.json()));
    }

    const data = await Promise.all(promises);

    const combinedResult = combineData(data);

    console.log(combinedResult);
}

const apiUrls = ["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/users/1","https://jsonplaceholder.typicode.com/comments/1"];

fetchDataParallel(apiUrls, combineData);
