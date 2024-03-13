// 11. var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve("Data received"); }, 1000);
//  });
//  promise.then(function(data) {
//     console.log(data);
//  }, function(error) {
//     console.log(error);
//  });
 
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() { resolve("Data received"); }, 1000);
 });
 promise.then(function(data) {
    console.log(data);
 }).catch(function(error) {
   console.log(error);
});
 
// ! added catch method chaining to capture the rejected promise