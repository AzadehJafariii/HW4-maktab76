
// function of merge two arrays and remove duplicates:

function removeDuplicate(array1 , array2){
    let newArr = array1.concat(array2);
    let uniqueValues = [];
    for(let i of newArr){
        if(uniqueValues.indexOf(i) === -1)
        uniqueValues.push(i);
    }
    return uniqueValues;
}
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
console.log(removeDuplicate(array1 , array2));