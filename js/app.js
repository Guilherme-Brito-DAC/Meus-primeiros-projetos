var analogic = document.getElementById("analogic");
var digital = document.getElementById("digital");
var clock = document.getElementById("relogio");
var cron= document.getElementById("cron");
var temp = document.getElementById("temp");
var startcron = document.getElementById("startcron");
var stopcron = document.getElementById("stopcron");
var recron = document.getElementById("recron");
var starttemp = document.getElementById("starttemp");
var stoptemp = document.getElementById("stoptemp");

var hh = 0;
var mi = 0;
var ss = 0;
var mm = 1000;
var inter;
var intervalotemp;

starttemp.addEventListener("click",function(){
starttemp.style.backgroundColor="#1094e5";
stoptemp.style.backgroundColor="#404040";
var hrtemp = document.getElementById("hrtemp");
var mintemp = document.getElementById("mintemp");
var sectemp = document.getElementById("sectemp");
var hr2 = document.getElementById("hr2");
var min2 = document.getElementById("min2");
var sec2 = document.getElementById("sec2");
hrtemp.style.display = "none";
mintemp.style.display = "none";
sectemp.style.display = "none";
hr2.style.display = "block";
min2.style.display = "block";
sec2.style.display = "block";
var hour = hrtemp.value;
var min = mintemp.value;
var sec = sectemp.value;
hr2.innerHTML = hour;
min2.innerHTML = min;
sec2.innerHTML = sec;
intervalotemp = setInterval(()=>{
if(sec <= 00){
  if(min <= 00){
    if(hour <= 00){

    }else{
      hour--;
      min = 59;
      sec = 59;
    }
  }else{
    min--;
    sec = 59;
  }
}else{
  sec--;
}
if(sec < 10){
  sec2.innerHTML = "0"+sec;
}else{
  sec2.innerHTML = sec;
}
if(min > 0 && min < 10){
  min2.innerHTML ="0"+min;
}else{
  min2.innerHTML = min;
}
if(hour > 0 && hour < 10){
  hr2.innerHTML = "0"+hour;
}else{
  hr2.innerHTML = hour;
} 
},1000)
});

stoptemp.addEventListener("click",function(){
clearInterval(intervalotemp);
starttemp.style.backgroundColor="#404040";
stoptemp.style.backgroundColor="#1094e5";
var hrtemp = document.getElementById("hrtemp");
var mintemp = document.getElementById("mintemp");
var sectemp = document.getElementById("sectemp");
var hr2 = document.getElementById("hr2");
var min2 = document.getElementById("min2");
var sec2 = document.getElementById("sec2");
hrtemp.style.display = "block";
mintemp.style.display = "block";
sectemp.style.display = "block"
hr2.style.display = "none";
min2.style.display = "none";
sec2.style.display = "none";
hrtemp.innerHTML = "00";
mintemp.innerHTML = "00";
sectemp.innerHTML = "00";

});

startcron.addEventListener("click",function(){
  var hrcron = document.getElementById("hrcron");
  var mmcron = document.getElementById("mincron");
  var secron = document.getElementById("seccron");
  startcron.style.backgroundColor = "#1094e5";
  stopcron.style.backgroundColor = "#404040";
  recron.style.backgroundColor = "#404040";
  inter = setInterval(() => {
    ss++;
    if(ss == 60){
      ss = 00;
      mi++;

      if(mi == 60){
        mi = 00;
        hh++;

      }
    }
    hrcron.innerHTML = (hh<10)? '0'+hh:hh;
    mmcron.innerHTML = (mi<10)? '0'+mi:mi;
    seccron.innerHTML = (ss<10)? '0'+ss:ss;

  },1000)
});

stopcron.addEventListener("click",function(){
  startcron.style.backgroundColor = "#404040";
  stopcron.style.backgroundColor = "#1094e5";
  recron.style.backgroundColor = "#404040";
clearInterval(inter);
});

recron.addEventListener("click",function(){
  var hrcron = document.getElementById("hrcron");
  var mmcron = document.getElementById("mincron");
  var secron = document.getElementById("seccron");
  startcron.style.backgroundColor = "#404040";
  stopcron.style.backgroundColor = "#404040";
  recron.style.backgroundColor = "#1094e5";
  clearInterval(inter);
  hh = 00;
  mi = 00;
  ss = 00;
  hrcron.innerHTML = (hh<10)? '0'+hh:hh;
  mmcron.innerHTML = (mi<10)? '0'+mi:mi;
  seccron.innerHTML = (ss<10)? '0'+ss:ss;
  });

analogic.addEventListener("click",function(){
  var clocklogic = document.getElementById("clock");
  var digitalclock = document.getElementById("digitalclock");
  if(clocklogic.style.display === "none"){
    clocklogic.style.display = "flex";
    digitalclock.style.display = "none";
    analogic.style.backgroundColor = "#1094e5";
    digital.style.backgroundColor = "#404040";
  }else{
    clocklogic.style.display = "none";
    digitalclock.style.display = "flex";
    analogic.style.backgroundColor = "#404040";
    digital.style.backgroundColor = "#1094e5";
  }
});

digital.addEventListener("click",function(){
    var clocklogic = document.getElementById("clock");
    var digitalclock = document.getElementById("digitalclock");
    if(clocklogic.style.display === "none"){
      clocklogic.style.display = "flex";
      digitalclock.style.display = "none";
      analogic.style.backgroundColor = "#1094e5";
      digital.style.backgroundColor = "#404040";
    }else{
      clocklogic.style.display = "none";
      digitalclock.style.display = "flex";
      analogic.style.backgroundColor = "#404040";
      digital.style.backgroundColor = "#1094e5";
    }
  });

  cron.addEventListener("click",function(){
    var clocklogic = document.getElementById("clock");
    var digitalclock = document.getElementById("digitalclock");
    var typeclock = document.getElementById("typeclock");
    var temp1= document.getElementById("temp1");
    var cron1=document.getElementById("cron1");
    var cronbtn=document.getElementById("cronbtn");

    cron.style.backgroundColor="#1094e5";
    temp.style.backgroundColor="#404040";
    clock.style.backgroundColor="#404040";

    cronbtn.style.display="flex";
    cron1.style.display="flex";
    tempbtn.style.display = "none";
    temp1.style.display = "none";
    clocklogic.style.display = "none";
    digitalclock.style.display = "none";
    typeclock.style.display = "none";
  });

  temp.addEventListener("click",function(event){
    var clocklogic = document.getElementById("clock");
    var digitalclock = document.getElementById("digitalclock");
    var typeclock = document.getElementById("typeclock");
    var temp1= document.getElementById("temp1");
    var cronbtn=document.getElementById("cronbtn");
    var sectemp = document.getElementById("sectemp");
    
    cronbtn.style.display="none";
    cron1.style.display="none";
    tempbtn.style.display = "flex";
    temp1.style.display = "flex";
    clocklogic.style.display = "none";
    digitalclock.style.display = "none";
    typeclock.style.display = "none";
    cron.style.backgroundColor="#404040";
    temp.style.backgroundColor="#1094e5";
    clock.style.backgroundColor="#404040";

    event.stopPropagation()
  
    sectemp.focus();
  });

  clock.addEventListener("click",function(){
    var clocklogic = document.getElementById("clock");
    var digitalclock = document.getElementById("digitalclock");
    var typeclock = document.getElementById("typeclock");
    var analogic = document.getElementById("analogic");
    var temp1= document.getElementById("temp1");
    var cronbtn=document.getElementById("cronbtn");

    cronbtn.style.display="none";
    cron1.style.display="none";
    tempbtn.style.display = "none";
    temp1.style.display = "none";
    typeclock.style.display = "flex";
    clocklogic.style.display = "flex";
    digitalclock.style.display = "none";
    analogic.style.backgroundColor = "#1094e5";
    digital.style.backgroundColor = "#404040";
    cron.style.backgroundColor="#404040";
    temp.style.backgroundColor="#404040";
    clock.style.backgroundColor="#1094e5";
  });

