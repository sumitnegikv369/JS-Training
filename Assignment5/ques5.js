// ? 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] },
   c: ["sumit"]
};

const flattenObject = (obj) => {
    const newObj = {};
    for(let [key, value] of Object.entries(obj)){
        if(typeof value === "object"){
            for(let [nestedKey, nestedValue] of Object.entries(flattenObject(value))){
                newObj[`${key}.${nestedKey}`] = nestedValue; 
            }
        }else{
            newObj[key] = value;
        }
    }
    return newObj;
}

console.log(flattenObject(obj));