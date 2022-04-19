
// function remove 'null', '0', '""', 'false', 'undefined', 'NaN' values from array:

function removeFalsey(arr) {
    // arr =(arr);
    let tempArr = [];
 
    arr.forEach((item) => {
      if (item) {
        tempArr.push(item);
      }
    });
    return tempArr;
}
let arr = [null, 0, "", false, undefined, NaN, 1, 2, "JS", true, []];
console.log(removeFalsey(arr));