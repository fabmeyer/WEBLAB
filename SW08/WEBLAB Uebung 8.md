# WEBLAB Uebung 8
## Timer mit Bootstrap
## Author: Fabian Meyer

```html
<!doctype html>
<html lang="de">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="Assets/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Uebung8</title>
  <link href="Assets/style.css" rel="stylesheet">
</head>

<body>
  <div class="clock container col-xs-12 col-md-6" id="clock_whole">
    <div class="clock_parts_big row">
      <div class="clock_parts_small col-xs-12 col-md-4">
        <div class="button" id="m_up">
          <a href="#" onclick="minutes_up()">minutes up</a>
        </div>
        <div class="button" id="m_down">
          <a href="#" onclick="minutes_down()">minutes down</a>
        </div>
      </div>
      <div class="clock_parts_small col-xs-12 col-md-4">
        <div class="time">
          <a class="numbers" id="minutes">00</a>
          <a>:</a>
          <a class="numbers" id="seconds">00</a>
          <a>:</a>
          <a class="numbers" id="centiseconds">00</a>
        </div>
      </div>
      <div class="clock_parts_small col-xs-12 col-md-4">
        <div class="button" id="s_up">
          <a href="#"  onclick="seconds_up()">seconds up</a>
        </div>
        <div class="button" id="s_down">
          <a href="#"  onclick="seconds_down()">seconds down</a>
        </div>
      </div>
    </div>
    <div class="clock_parts_big row">
      <div class="clock_parts_small col-xs-12 col-md-4">
        <div class="button" id="start">
          <a href="#" onclick="start()">start</a>
        </div>
      </div>
      <div class="clock_parts_small col-xs-12 col-md-4">
        <div class="button" id="stop">
          <a href="#" onclick="stop()">stop</a>
        </div>
      </div>
      <div class="clock_parts_small col-xs-12 col-md-4">
        <div class="button" id="reset">
          <a href="#" onclick="reset()">reset</a>
        </div>
      </div>
    </div>
  </div>
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="Assets/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="Assets/script.js"></script>
</body>

</html>
```
```css
@font-face {
  font-family: "DSEG7Classic-Regular";
  src: url(DSEG7Classic-Regular.ttf) format("truetype");
  /* http://www.keshikan.net/fonts-e.html */
}

.clock {
  background-color: Azure;
  padding: 25px;
  display: block;
  text-align: center;
  justify-content: center;
  box-shadow: 0px 10px 10px grey;
  @media (max-width: 575.98px) {
      display: flex;
      height: 300px;
  }
}

.clock_parts_big {
  margin: 10px;
  background-color: Lavender;
  display: block;
  align-items: center;
  border: 3px solid grey;
  border-radius: 10px;
}

.button {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 20px;
  background-color: LavenderBlush;
  padding: 5px;
  border: 3px solid black;
  border-radius: 10px;
  box-shadow: 0px 5px 5px grey;
}

.time {
  display: flex;
  justify-content: space-around;
  width: auto;
  font-family: "DSEG7Classic-Regular", monospace;
  font-size: 40px;
  padding: 10px;
  text-decoration: underline;
  @media (max-width: 575.98px) {
      font-size: 20px;
  }
}

.numbers {
  width: fit-content;
  height: fit-content;
}
```
```javascript
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
  if (seconds < 59) {
    seconds++;
    document.getElementById("seconds").innerHTML = pad(seconds, 2);
  } else if (seconds == 59) {
    seconds = 0;
    document.getElementById("seconds").innerHTML = pad(seconds, 2);
    minutes++;
    document.getElementById("minutes").innerHTML = pad(minutes, 2)
  }
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
```