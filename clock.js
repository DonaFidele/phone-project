function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = "AM";
  
    if (hours >= 12) {
      meridiem = "PM";
    }
  
    if (hours > 12) {
      hours = hours - 12;
    }
  
    if (hours == 0) {
      hours = 12;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    var timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("clock").innerHTML = timeString;
  }
  
  setInterval(updateClock, 1000);
  