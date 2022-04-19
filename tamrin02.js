

// function declaration to computing sum of array:

function sumArray (array){
    return array.reduce(function(sum , current){
         return sum + current;
        },0);
} 
let array = [1, 2, 3, 4, 5, 6];
console.log(`sum is: ${sumArray(array)}`);


// with arrow function:
// let array = [1, 2, 3, 4, 5, 6]
// let sumArray = array.reduce((sum, current) => sum + current, 0);
// console.log(`sum is: ${sumArray}`);
