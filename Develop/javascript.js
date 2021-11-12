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

