

//accept a string as a parameter and converts first letter of each word to uppercase:

function firstLetterUpperCase(str){
    let array = str.split(' ');
    array.forEach(function (item , i){
        array[i] = item[0].toUpperCase() + item.substring(1);
        
    })
    return array.join(' ');
}
let str = 'the quick brown fox';
console.log(firstLetterUpperCase(str));


