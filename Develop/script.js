var thisTime = dayjs();
var thisHour = dayjs().hour();
var saveButton = $(".saveBtn");

var hour1 = $("hour-1");
var hour2 = $("hour-2");
var hour3 = $("hour-3");
var hour4 = $("hour-4");
var hour5 = $("hour-5");
var hour6 = $("hour-6");
var hour7 = $("hour-7");
var hour8 = $("hour-8");
var hour9 = $("hour-9");
var hour10 = $("hour-10");
var hour11 = $("hour-11");
var hour12 = $("hour-12");
var hour13 = $("hour-13");
var hour14 = $("hour-14");
var hour15 = $("hour-15");
var hour16 = $("hour-16");
var hour17 = $("hour-17");
var hour18 = $("hour-18");
var hour19 = $("hour-19");
var hour20 = $("hour-20");
var hour21 = $("hour-21");
var hour22 = $("hour-22");
var hour23 = $("hour-23");
var hour24 = $("hour-24");



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $("#calendarDate").text(thisTime.format("MMM D, YYYY"));

});
