let ho = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let btn = document.getElementById("btn");
let btn_stop = document.getElementById("btn-stop");




let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
let audio = new Audio('timer.mp3');

btn.addEventListener("click", function () {

  let second = sec.value;
let minute =  min.value;
let hour = ho.value;
let timer;
let flag = true;
  
  // let elementCreat = document.createElement("span");

  // if (hourValue <= 60 && minValue <= 60 && secValue <= 60) {
  //   console.log(hourValue, minValue, secValue);
  // } else {
  //   console.log("Please Enter Correct Time");
  // }

  if (flag) {
    timer = setInterval(function () {
      second--;
      if (second <= 0) {
        if(minute>=1 ){
          second = 59;
            minute--;
            
        }
        else{
          clearInterval(timer);
          
          audio.play();
        }
      }
      if(hour>0&&minute==-1){
        minute = 59;
        hour--;
        if(hour==-1){
          hour==0
        }
      }
      
      h.textContent = hour < 10 ? `${"0" + hour}h : ` : `${hour}h : `;
      m.textContent = minute < 10 ? `${"0" + minute}m : ` : `${minute}m : `;
      s.textContent = second < 10 ? `${"0" + second}s ` : `${second}s`;
    }, 1000);
    flag = false;
    
  } else {
    clearInterval(timer);
    flag = true;
    
  }
});


btn_stop.addEventListener("click",function(){
  audio.pause();
})



