<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="Resources/Logo.ico">
    <title>Pomodoro - A Productivity Timer</title>
    <link rel="stylesheet" href="css/master.css">
    <link rel="stylesheet" href="css/index.css">
  </head>
  <body>
    <?php include(__DIR__.'/left-div.php') ?>
    <div class="right-div timer-div">
      <div class="input-div">
        <div class="input-subdiv">
          <h6>Pomodoro Interval</h6>
          <input type="range" min='25' max='60' step='5' value="25" onchange="pomodoro()" id='pomodoro-ip'>
          <div id='pomodoro-div'>Set to 25 minutes</div>
        </div>
        <div class="input-subdiv">
          <h6>Short Break Interval</h6>
          <input type="range" min='5' max='10' step='1' value="5" onchange="shortBreak()" id='shortBreak-ip'>
          <div id='shortBreak-div'>Set to 5 minutes</div>
        </div>
        <div class="input-subdiv">
          <h6>Long Break Interval</h6>
          <input type="range" min='10' max='30' step='5' value="15" onchange='longBreak()' id='longBreak-ip'>
          <div id='longBreak-div'>Set to 15 minutes</div>
        </div>
        <div class="input-subdiv">
          <h6>Buffer Interval</h6>
          <input type="range" min='0' max='5' step='1' value="0" onchange="buffer()" id='buffer-ip'>
          <div id='buffer-div'>Set to 0 minutes</div>
        </div>
      </div>
      <div class="timer-subdiv">
        <div class="timer">
          <div id="clock-title"><h6>Current Interval: Pomodoro</h6></div>
          <div id='clock-time'>25:00</div>
        </div>
        <div class="timer-stats-div" id='timer-stats'>
          <div>
            <b>Pomodoros completed:</b> <span id='pom-span'>0</span>
          </div>
          <div>
            <b>Sets completed:</b> <span id='set-span'>0</span>
          </div>
          <div>
            <b>Current checkmarker:</b> <span id='check-span'>0</span>
          </div>
        </div>
      </div>
      <div class="timer-button-div">
        <div class="input-subdiv" style="font-size:18px;">
          <h6>Checkmarkers in Each Set</h6>
          <input type="range" min='3' max='7' step='1' value="4" onchange='checkmarkers()' id='checkmarkers-ip'>
          <div id='checkmarkers-div'>Set to 4 checkmarkers</div>
        </div>
        <div class="timer-button-subdiv">
          <div class="button-parent-div">
            <div>
            </div>
            <button class='button-div' onclick="startTimer('0')" id='start-button'>
              START
            </button>
            <div>
            </div>
          </div>
          <div class="button-parent-div">
            <div>
            </div>
            <button class='button-div' onclick="window.location.reload()" id='reset-button'>
              RESET
            </button>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script type="text/javascript" src="js/index.js"></script>
</html>
