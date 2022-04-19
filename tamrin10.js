
// function to remove the first occurrence of a given 'search string' from a string:
// input: "The quick brown fox jumps over the lazy dog" , 'the'
// output: "The quick brown fox jumps over lazy dog"

function removeFirstOccurrenceFromLast(str,shouldRemoveWord){
    let array = str.split(" ");
    let findItem = array.indexOf(shouldRemoveWord); 
    array.splice(findItem, 1);
    return `" ${array.join(" ")} "`;

}   
let str = "The quick brown fox jumps over the lazy dog";
let shouldRemoveWord = 'the';
console.log(removeFirstOccurrenceFromLast(str,shouldRemoveWord));


