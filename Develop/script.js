var thisTime = dayjs();
var thisHour = dayjs().hour();
var saveButton = $(".saveBtn");


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


$(function () {
  saveButton.on("click",function(){
  
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
  })

  if(currentHour === 8){
    hour8.removeClass("past")
    hour8.removeClass("future")
  }else if (currentHour < 8){
    hour8.removeClass("future")
    hour8.removeClass("present")
  }else {
    hour8.removeClass("present")
    hour8.removeClass("past")
  }

  $("#calendarDate").text(thisTime.format("MMM D, YYYY"));
});
