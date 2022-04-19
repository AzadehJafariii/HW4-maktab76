
//function hide user email address to protect:

protect_email = function (user_email) {
    
    let splitted = user_email.split("@");
    let part1 = splitted[0];
    let part2 = splitted[1];
    avg = part1.length / 2; //not good result
    part1 = part1.substring(0, (part1.length - avg));
   
    return part1 + "...@" + part2;
};

console.log(protect_email("az.jafari@example.com")); 




// function hideEmail(email) {
//     let hiddenEmail = "";

//     for (i = 0; i < email.length; i++) {
//         if (i > 2 && i< email.indexOf("@") ) {
//             hiddenEmail += "*";
//         } else {
//             hiddenEmail += email[i];
//         }
//     }
//     return hiddenEmail;
// }
// let email = "azadeh.jafari@gmail.com"
// console.log(hideEmail(email));