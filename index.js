function showTime() {

  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var tag = "AM";

  //display time in 12-hour format
  if (hour > 12) {
    hour = hour - 12;
    tag = "PM";
  }

  if (hour == 0) {
    hour = 12;
    tag = "AM";
  }

  //display the numbers in two digit format
  hour = (hour < 10) ? "0" + hour : hour;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  var currentTime = hour + " : " + min + " : " + sec + " " + tag;

  document.getElementById("digital_clock").innerHTML = currentTime;

  setTimeout(showTime, 1000) //update clock every second
}

showTime();
