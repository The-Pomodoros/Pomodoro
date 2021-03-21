var tempInterval;
function startTimer(){
  var state=document.getElementById('start-button').innerHTML.trim();
  if(state=='START'){
    var min,sec;
    min=parseInt(document.getElementById('clock-time').innerHTML.trim().substring(0,2));
    sec=parseInt(document.getElementById('clock-time').innerHTML.trim().substring(3));

    if(sec==0 && min==0){
      alert('Time is up');
      window.location.reload(); //temp
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
        alert('Time is up');
        window.location.reload();
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

function checkmarkers(){
  var value=document.getElementById('checkmarkers-ip').value;
  document.getElementById('checkmarkers-div').innerHTML='Set to '+value+' checkmarkers';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}

function buffer(){
  var value=document.getElementById('buffer-ip').value;
  document.getElementById('buffer-div').innerHTML='Set to '+value+' minutes';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}

function longBreak(){
  var value=document.getElementById('longBreak-ip').value;
  document.getElementById('longBreak-div').innerHTML='Set to '+value+' minutes';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}

function shortBreak(){
  var value=document.getElementById('shortBreak-ip').value;
  document.getElementById('shortBreak-div').innerHTML='Set to '+value+' minutes';
  clearInterval(tempInterval);
  pomodoro();
  document.getElementById('start-button').innerHTML='START';
}

function pomodoro(){
  var value=document.getElementById('pomodoro-ip').value;
  document.getElementById('pomodoro-div').innerHTML='Set to '+value+' minutes';

  if(value.length<2){
    value='0'+value;
  }
  document.getElementById('clock-time').innerHTML=value+':00';
  clearInterval(tempInterval);
  document.getElementById('start-button').innerHTML='START';
}
