<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="Resources/logo.ico">
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
          <input type="range" min='25' max='60' step='5' value="25">
          Set to 25 minutes
        </div>
        <div class="input-subdiv">
          <h6>Short Break Interval</h6>
          <input type="range" min='5' max='10' step='1' value="5">
          Set to 5 minutes
        </div>
        <div class="input-subdiv">
          <h6>Long Break Interval</h6>
          <input type="range" min='10' max='30' step='5' value="15">
          Set to 15 minutes
        </div>
        <div class="input-subdiv">
          <h6>Buffer Interval</h6>
          <input type="range" min='0' max='5' step='1' value="0">
          Set to 0 minutes
        </div>
      </div>
      <div class="timer-subdiv">
        <div class="timer">
          88:88
        </div>
        <div class="timer-stats-div">
          Stats
        </div>
      </div>
      <div class="timer-button-div">

      </div>
    </div>
  </body>
</html>
