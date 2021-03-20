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
