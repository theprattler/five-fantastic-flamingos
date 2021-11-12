// format for moment.js to display date
var today = moment().format("dddd, MMMM Do, YYYY h:mm a").toString();
// add value of today var to currentDay element
document.getElementById("currentDay").innerHTML = today;

// get the hour from moment
var currentHour = moment().hour();

// remove irrelevent classes if currentHour is after 9am
if (9 < currentHour) {
    $("#9").removeClass("present future");
} else if (9 > currentHour) {
    $("#9").removeClass("past present");
} else {
    $("#9").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 10am
if (10 < currentHour) {
    $("#10").removeClass("present future");
} else if (10 > currentHour) {
    $("#10").removeClass("past present");
} else {
    $("#10").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 11am
if (11 < currentHour) {
    $("#11").removeClass("present future");
} else if (11 > currentHour) {
    $("#11").removeClass("past present");
} else {
    $("#11").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 12pm
if (12 < currentHour) {
    $("#12").removeClass("present future");
} else if (12 > currentHour) {
    $("#12").removeClass("past present");
} else {
    $("#12").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 1pm
if (13 < currentHour) {
    $("#13").removeClass("present future");
} else if (13 > currentHour) {
    $("#13").removeClass("past present");
} else {
    $("#13").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 2pm
if (14 < currentHour) {
    $("#14").removeClass("present future");
} else if (14 > currentHour) {
    $("#14").removeClass("past present");
} else {
    $("#14").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 3pm
if (15 < currentHour) {
    $("#15").removeClass("present future");
} else if (15 > currentHour) {
    $("#15").removeClass("past present");
} else {
    $("#15").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 4pm
if (16 < currentHour) {
    $("#16").removeClass("present future");
} else if (16 > currentHour) {
    $("#16").removeClass("past present");
} else {
    $("#16").removeClass("past future");
};

// remove irrelevent classes if currentHour is after 5pm
if (17 < currentHour) {
    $("#17").removeClass("present future");
} else if (17 > currentHour) {
    $("#17").removeClass("past present");
} else {
    $("#17").removeClass("past future");
};

// save button is clicked
$(".saveBtn").click(function() {
    var task9 = $("#task9").val();
    var task10 = $("#task10").val();
    var task11 = $("#task11").val();
    var task12 = $("#task12").val();
    var task13 = $("#task13").val();
    var task14 = $("#task14").val();
    var task15 = $("#task15").val();
    var task16 = $("#task16").val();
    var task17 = $("#task17").val();

    // array for tasks
    var tasks = {
        hour9: task9,
        hour10: task10,
        hour11: task11,
        hour12: task12,
        hour13: task13,
        hour14: task14,
        hour15: task15,
        hour16: task16,
        hour17: task17
    };
    // store data in local storage
    localStorage.setItem("work-day-scheduler", JSON.stringify(tasks));
});

// retrieve tasks from local storage
var savedTasks = localStorage.getItem("work-day-scheduler");
    var task9 = JSON.parse(savedTasks);
    document.getElementById("task9").innerHTML = task9.hour9;
    var task10 = JSON.parse(savedTasks);
    document.getElementById("task10").innerHTML = task10.hour10;
    var task11 = JSON.parse(savedTasks);
    document.getElementById("task11").innerHTML = task11.hour11;
    var task12 = JSON.parse(savedTasks);
    document.getElementById("task12").innerHTML = task12.hour12;
    var task13 = JSON.parse(savedTasks);
    document.getElementById("task13").innerHTML = task13.hour13;
    var task14 = JSON.parse(savedTasks);
    document.getElementById("task14").innerHTML = task14.hour14;
    var task15 = JSON.parse(savedTasks);
    document.getElementById("task15").innerHTML = task15.hour15;
    var task16 = JSON.parse(savedTasks);
    document.getElementById("task16").innerHTML = task16.hour16;
    var task17 = JSON.parse(savedTasks);
    document.getElementById("task17").innerHTML = task17.hour17;
    var task18 = JSON.parse(savedTasks);
    document.getElementById("task18").innerHTML = task18.hour18;