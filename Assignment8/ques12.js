// 12. async function getData() {
//     setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
//  getData().then(function(data) {
//     console.log(data);
//  });

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () { return resolve([1, 2, 3, 4, 5]); }, 1000);
    })
}
getData().then(function (data) {
    console.log(data);
});