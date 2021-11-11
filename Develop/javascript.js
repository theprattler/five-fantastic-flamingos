// format for moment.js to display date
var today = moment().format("dddd, MMMM Do, YYYY h:mm a").toString();
// add value of today var to currentDay element
document.getElementById("currentDay").innerHTML = today;

// function to set color of task background dependant upon current hour
var taskColor = function() {
    // get current hour from today var
    var currentHour = moment().hour();
    console.log(currentHour);
    
    

    // remove irrelevent classes if currentHour is after task hour
    if (".blockHour" < currentHour) {
        $("#task").removeClass(".present, .future");
    // remove irrelevent classes if currentHour is before task hour
    } else if (".blockHour" > currentHour) {
        $("#task").removeClass(".past, .present");
    // remove irrelevent classes if currentHour equals task hour
    } else {
        $("#task").removeClass(".past, .future");
    };
};