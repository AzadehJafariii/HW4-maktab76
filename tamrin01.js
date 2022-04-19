
//exponent of a number using recursion:

function exponentOfNumber(x,n){
    if (n === 0){
        return 1;
    }
    return x * exponentOfNumber (x, n - 1);
}
console.log(exponentOfNumber(2,3));
 
