
// get current date and pass seperator "/" and "-":

function printCurrentDate(d1){
    const date = ('0' + d1.getDate()).slice(-2);
    const month = ('0' + (d1.getMonth() + 1)).slice(-2);
    const year = d1.getFullYear();
    console.log(`"${date}/${month}/${year}"`);
    console.log(`"${date}-${month}-${year}"`);
}
let d1 = new Date();
printCurrentDate(d1);
console.log(d1);