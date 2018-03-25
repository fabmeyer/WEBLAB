var minutes = 0;
var seconds = 0;
var centiseconds = 0;
var running = false;
var button_start_clicked = false;
var alarm_ringing = false;
var alarm_color = false;

function minutes_up() {
  if (minutes < 60) {
    minutes++;
  } else {
    minutes = 0;
  }
  document.getElementById("minutes").innerHTML = pad(minutes, 2);
}

function minutes_down() {
  if (minutes > 0) {
    minutes--;
    document.getElementById("minutes").innerHTML = pad(minutes, 2);
  }
}

function seconds_up() {
  if (seconds < 60) {
    seconds++;
  } else {
    seconds = 0;
  }
  document.getElementById("seconds").innerHTML = pad(seconds, 2);
}

function seconds_down() {
  if (seconds > 0) {
    seconds--;
    document.getElementById("seconds").innerHTML = pad(seconds, 2)
  } else if (seconds == 0 && minutes > 0) {
    seconds = 59;
    document.getElementById("seconds").innerHTML = pad(seconds, 2)
    minutes--;
    document.getElementById("minutes").innerHTML = pad(minutes, 2)
  }
}

function pad(number, length) {
  var res = parseInt(number);
  res = res.toString();
  res = res.padStart(length, "0");
  return res;
}

function start() {
  if (running) {
    return;
  } else {
    running = true;
    if (seconds == 0 && minutes == 0) {
      return;
    } else {
      if (!button_start_clicked) {
        var myInterval = setInterval(function() {
          counting_down()
        }, 10);
        button_start_clicked = true;
      }
    }
  }

  function counting_down() {
    console.log('minutes ' + minutes + '\n seconds ' + seconds +
      '\ centiseconds' + centiseconds);
    if (running) {
      if (centiseconds > 0) {
        centiseconds--;
        document.getElementById("centiseconds").innerHTML = pad(centiseconds, 2);
      } else if (centiseconds == 0 && seconds > 0) {
        centiseconds = 99;
        document.getElementById("centiseconds").innerHTML = pad(centiseconds, 2);
        seconds--;
        document.getElementById("seconds").innerHTML = pad(seconds, 2);
      } else if (centiseconds == 0 && seconds == 0 && minutes > 0) {
        centiseconds = 99;
        document.getElementById("centiseconds").innerHTML = pad(centiseconds, 2);
        seconds = 59;
        document.getElementById("seconds").innerHTML = pad(seconds, 2);
        minutes--;
        document.getElementById("minutes").innerHTML = pad(minutes, 2);
      }
    }
  }
}

function stop() {
  running = false;
  alarm_ringing = false;
}

function reset() {
  running = false;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  document.getElementById("minutes").innerHTML = pad(minutes, 2);
  document.getElementById("seconds").innerHTML = pad(seconds, 2);
  document.getElementById("centiseconds").innerHTML = pad(centiseconds, 2);
}
