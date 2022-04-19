
// function get full name of month from a particular input:

function fullMonthName (d){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return monthNames[d.getMonth()];
}
const d = new Date("10/11/2009");
// const d = new Date("11/13/2014");
console.log(fullMonthName(d));



// const dateObj = new Date()
// const monthName = dateObj.toLocaleString("default", { month: "long" });
// console.log(monthName);