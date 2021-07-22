var tempInterval;
var pomodoroInt=parseInt(document.getElementById('pomodoro-ip').value);
var shortInt=parseInt(document.getElementById('shortBreak-ip').value);
var longInt=parseInt(document.getElementById('longBreak-ip').value);
var bufferInt=parseInt(document.getElementById('buffer-ip').value);
var checkMark=parseInt(document.getElementById('checkmarkers-ip').value);
var countMark=0,countPom=0,countSet=0;

function startTimer(state){
  if (state=='0') state=document.getElementById('start-button').innerHTML.trim();
  if(state=='START'){
    var min,sec,interval;
    min=parseInt(document.getElementById('clock-time').innerHTML.trim().substring(0,2));
    sec=parseInt(document.getElementById('clock-time').innerHTML.trim().substring(3));
    interval=document.getElementById('clock-title').innerHTML.trim().substring(22,document.getElementById('clock-title').innerHTML.trim().indexOf('/')-1).trim();

    if(sec==0 && min==0){
      document.getElementById('notif').play();
      alert('The time for the current '+interval.toLowerCase()+' has been completed'); //change for buffer implementation
      changeTimer();
    }

    else if(sec==0 && min!=0){
      sec=59;
      min--;
    }

    else{
      sec--;
    }

    tempInterval=setInterval(function(){
      var mins=min.toString();
      var secs=sec.toString();

      if(mins.length<2){
        mins='0'+mins;
      }
      if(secs.length<2){
        secs='0'+secs;
      }
      document.getElementById('clock-time').innerHTML=mins+':'+secs;
      if(sec==0 && min==0){
        document.getElementById('notif').play();
        alert('The time for the current '+interval.toLowerCase()+' has been completed'); //change for buffer implementation
        changeTimer()
      }

      else if(sec==0 && min!=0){
        sec=59;
        min--;
      }

      else{
        sec--;
      }
    },1000);
    document.getElementById('start-button').innerHTML='STOP';
  }
  else{
    clearInterval(tempInterval);
    document.getElementById('start-button').innerHTML='START';
  }
}

function changeTimer(){
  clearInterval(tempInterval);

  var interval=document.getElementById('clock-title').innerHTML.trim().substring(22,document.getElementById('clock-title').innerHTML.trim().indexOf('/')-1).trim().toLowerCase();
  var min;

  if(interval=='pomodoro'){
    countMark++;
    if(countMark!=checkMark){
      interval='Short Break';
      min=shortInt.toString();
    }
    else{
      interval='Long Break';
      min=longInt.toString();
      countSet++;
    }
    countPom++;
    document.getElementById('pom-span').innerHTML=countPom;
    document.getElementById('set-span').innerHTML=countSet;
  }
  else{
    interval='Pomodoro';
    min=pomodoroInt.toString();
    if(countMark==checkMark) countMark=0;
  }
  if(min.length<2) min='0'+min;
  document.getElementById('check-span').innerHTML=countMark;
  document.getElementById('clock-time').innerHTML=min+':00';
  document.getElementById('clock-title').innerHTML='<h6>Current Interval: '+interval+'</h6>';
  startTimer('START');
}

function pomodoro(){
  pomodoroInt=parseInt(document.getElementById('pomodoro-ip').value);
  document.getElementById('pomodoro-div').innerHTML='Set to '+pomodoroInt+' minutes';

  value=toString(pomodoroInt);
  if(value.length<2){
    value='0'+value;
  }
  countPom=0;
  countSet=0;
  countMark=0;
  document.getElementById('clock-time').innerHTML=pomodoroInt+':00';
  document.getElementById('pom-span').innerHTML=countPom;
  document.getElementById('set-span').innerHTML=countSet;
  document.getElementById('check-span').innerHTML=countMark;
  clearInterval(tempInterval);
  document.getElementById('start-button').innerHTML='START';
}

function shortBreak(){
  shortInt=parseInt(document.getElementById('shortBreak-ip').value);
  document.getElementById('shortBreak-div').innerHTML='Set to '+shortInt+' minutes';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}

function longBreak(){
  longInt=parseInt(document.getElementById('longBreak-ip').value);
  document.getElementById('longBreak-div').innerHTML='Set to '+longInt+' minutes';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}

function buffer(){
  bufferInt=parseInt(document.getElementById('buffer-ip').value);
  document.getElementById('buffer-div').innerHTML='Set to '+bufferInt+' minutes';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}

function checkmarkers(){
  checkMark=parseInt(document.getElementById('checkmarkers-ip').value);
  document.getElementById('checkmarkers-div').innerHTML='Set to '+checkMark+' checkmarkers';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}
