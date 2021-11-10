// format for moment.js to display date
var today = moment().format("LLLL").toString();
// add value of today var to currentDay element
document.getElementById("currentDay").innerHTML = today;
