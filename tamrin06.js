
// function sum of rounded numbers of array using reduce:

function sumArray (array){
    return array.reduce(function(sum , current){
        return Math.round(sum + current);
        },0);
} 
let array = [15.5, 2.3, 1.1, 4.7];
console.log(`sum is: ${sumArray(array)}`);
