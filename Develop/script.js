var thisTime = dayjs();
var currentHour = dayjs().hour();
var saveButton = $(".saveBtn");

console.log(currentHour);

var hour8 = $("#hour-8");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var hour18 = $("#hour-18");
var hour19 = $("#hour-19");
var hour20 = $("#hour-20");

$(function () {
  saveButton.on("click", function () {
    localStorage.setItem("8am:", hour8.children("textarea").val());
    localStorage.setItem("9am:", hour9.children("textarea").val());
    localStorage.setItem("10am:", hour10.children("textarea").val());
    localStorage.setItem("11am:", hour11.children("textarea").val());
    localStorage.setItem("12pm:", hour12.children("textarea").val());
    localStorage.setItem("1pm:", hour13.children("textarea").val());
    localStorage.setItem("2pm:", hour14.children("textarea").val());
    localStorage.setItem("3pm:", hour15.children("textarea").val());
    localStorage.setItem("4pm:", hour16.children("textarea").val());
    localStorage.setItem("5pm:", hour17.children("textarea").val());
    localStorage.setItem("6pm:", hour18.children("textarea").val());
    localStorage.setItem("7pm:", hour19.children("textarea").val());
    localStorage.setItem("8pm:", hour20.children("textarea").val());
  });

  if (currentHour === 8) {
    hour8.removeClass("past");
    hour8.removeClass("future");
  } else if (currentHour < 8) {
    hour8.removeClass("future");
    hour8.removeClass("present");
  } else {
    hour8.removeClass("present");
    hour8.removeClass("future");
  }

  if (currentHour === 9) {
    hour9.removeClass("past");
    hour9.removeClass("future");
  } else if (currentHour < 9) {
    hour9.removeClass("future");
    hour9.removeClass("present");
  } else {
    hour9.removeClass("present");
    hour9.removeClass("future");
  }

  if (currentHour === 10) {
    hour10.removeClass("past");
    hour10.removeClass("future");
  } else if (currentHour < 10) {
    hour10.removeClass("past");
    hour10.removeClass("present");
  } else {
    hour10.removeClass("present");
    hour10.removeClass("future");
  }

  if (currentHour === 11) {
    hour11.removeClass("past");
    hour11.removeClass("future");
  } else if (currentHour < 11) {
    hour11.removeClass("past");
    hour11.removeClass("present");
  } else {
    hour11.removeClass("present");
    hour11.removeClass("future");
  }

  if (currentHour === 12) {
    hour12.removeClass("past");
    hour12.removeClass("future");
  } else if (currentHour < 12) {
    hour12.removeClass("past");
    hour12.removeClass("present");
  } else {
    hour12.removeClass("present");
    hour12.removeClass("future");
  }

  if (currentHour === 13) {
    hour13.removeClass("past");
    hour13.removeClass("future");
  } else if (currentHour < 13) {
    hour13.removeClass("past");
    hour13.removeClass("present");
  } else {
    hour13.removeClass("present");
    hour13.removeClass("future");
  }

  if (currentHour === 14) {
    hour14.removeClass("past");
    hour14.removeClass("future");
  } else if (currentHour < 14) {
    hour14.removeClass("past");
    hour14.removeClass("present");
  } else {
    hour14.removeClass("present");
    hour14.removeClass("future");
  }

  if (currentHour === 15) {
    hour15.removeClass("past");
    hour15.removeClass("future");
  } else if (currentHour < 15) {
    hour15.removeClass("past");
    hour15.removeClass("present");
  } else {
    hour15.removeClass("present");
    hour15.removeClass("future");
  }

  if (currentHour === 16) {
    hour16.removeClass("past");
    hour16.removeClass("future");
  } else if (currentHour < 16) {
    hour16.removeClass("past");
    hour16.removeClass("present");
  } else {
    hour16.removeClass("present");
    hour16.removeClass("future");
  }

  if (currentHour === 17) {
    hour17.removeClass("past");
    hour17.removeClass("future");
  } else if (currentHour < 17) {
    hour17.removeClass("past");
    hour17.removeClass("present");
  } else {
    hour17.removeClass("present");
    hour17.removeClass("future");
  }

  if (currentHour === 18) {
    hour18.removeClass("past");
    hour18.removeClass("future");
  } else if (currentHour < 18) {
    hour18.removeClass("past");
    hour18.removeClass("present");
  } else {
    hour18.removeClass("present");
    hour18.removeClass("future");
  }

  if (currentHour === 19) {
    hour19.removeClass("past");
    hour19.removeClass("future");
  } else if (currentHour < 19) {
    hour19.removeClass("past");
    hour19.removeClass("present");
  } else {
    hour19.removeClass("present");
    hour19.removeClass("future");
  }

  if (currentHour === 20) {
    hour20.removeClass("past");
    hour20.removeClass("future");
  } else if (currentHour < 20) {
    hour20.removeClass("paste");
    hour20.removeClass("present");
  } else {
    hour20.removeClass("present");
    hour20.removeClass("future");
  }

  var storage8 = localStorage.getItem("8am: ");
  hour8.children("textarea").append(storage8);

  var storage9 = localStorage.getItem("9am: ");
  hour9.children("textarea").append(storage9);

  var storage10 = localStorage.getItem("10am: ");
  hour10.children("textarea").append(storage10);
  var storage11 = localStorage.getItem("11am: ");
  hour11.children("textarea").append(storage11);

  var storage12 = localStorage.getItem("12pm: ");
  hour12.children("textarea").append(storage12);

  var storage13 = localStorage.getItem("1pm: ");
  hour8.children("textarea").append(storage13);

  var storage14 = localStorage.getItem("2pm: ");
  hour8.children("textarea").append(storage14);

  var storage15 = localStorage.getItem("3pm: ");
  hour15.children("textarea").append(storage15);

  var storage16 = localStorage.getItem("4pm: ");
  hour16.children("textarea").append(storage16);

  var storage17 = localStorage.getItem("5pm: ");
  hour17.children("textarea").append(storage17);

  var storage18 = localStorage.getItem("6pm: ");
  hour18.children("textarea").append(storage18);

  var storage19 = localStorage.getItem("7pm: ");
  hour19.children("textarea").append(storage19);

  var storage20 = localStorage.getItem("8pm: ");
  hour20.children("textarea").append(storage20);

  $("#currentDay").text(thisTime.format("MMM D, YYYY"));
});
