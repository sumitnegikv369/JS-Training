// 10.function getData(callback) {
//     setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
//  }
//  getData(function(data) {
//     console.log(data.length);
//  });

function getData(callback) {
    setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
 }
 getData(function(data) {
    console.log(data.length);
 });
