// 7. for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 1000); }

for (let i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000); }

// the 'var' keyword has functional scope, causing the variable declaration of 'i' to be hoisted to the block level of the 'for' loop. This can cause unexpected behavior, especially when combined with asynchronous operations such as setTimeout. After the synchronous loop finishes iterating, the setTimeout functions are registered to execute. However, they all reference the same 'i' variable, which holds the final value of 10. As a result, 'i' will be logged 10 times when the setTimeout functions execute, as they are queued up in the event loop and executed once the call stack is empty.