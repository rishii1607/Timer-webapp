let hours = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let btn = document.getElementById("btn");
let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
let reset_btn = document.getElementById("reset_btn");
let stop_btn = document.getElementById("stop_btn");
let timer;
let audio = new Audio("timer.mp3");
let teethBrush_timer = document.getElementById("teethBrush_timer");
let teethBrush= ""




let maggi_timer = document.getElementById("maggi_timer");
let maggi_timer_id= ""



let ho = document.getElementById("ho");
let mi = document.getElementById("mi");
let si = document.getElementById("se");


let hoMeggi = document.getElementById("hoMeggi");
let miMeggi = document.getElementById("miMeggi");
let seMeggi = document.getElementById("seMeggi");


let flag = true;

let flag2 = true;

let hourValue;
let minValue;
let secValue;


function startTimer() {
  if (flag && teethBrush==="" && maggi_timer_id==="") {
    hourValue = hours.value;
    minValue = min.value;
    secValue = sec.value;
    flag = false;
  } else if(teethBrush==="teethBrush_timer") {
    
    hourValue = ho.textContent;
    minValue = mi.textContent;
    secValue = se.textContent;
  
    h.textContent = hourValue;
    m.textContent= minValue;
    s.textContent= secValue;
  }else if(maggi_timer_id==="maggi_timer") {
    
    hourValue = hoMeggi.textContent;
    minValue = miMeggi.textContent;
    secValue = seMeggi.textContent;
  
    h.textContent = hourValue;
    m.textContent= minValue;
    s.textContent= secValue;
  }else{
    hourValue = h.innerHTML;
    minValue = m.innerHTML;
    secValue = s.innerHTML;
    console.log(hourValue + minValue, secValue);
  }

  hours.style.display = "none";
  sec.style.display = "none";
  min.style.display = "none";
  h.style.display = "inline-block";
  m.style.display = "inline-block";
  s.style.display = "inline-block";

  if (flag2) {
    if (hours.value > 0) {
      h.innerHTML = `${hours.value}`;
    }
    if (min.value > 0) {
      m.innerHTML = `${min.value}`;
    }
    if (sec.value > 0) {
      s.innerHTML = `${sec.value}`;
    }
    flag2 = false;
  }

  // if (hourValue <= 60 && minValue <= 60 && secValue <= 60) {
  console.log(hourValue, minValue, secValue);

  timer = setInterval(function () {
    secValue--;
    if (secValue <= 0) {
      if (minValue >= 1) {
        secValue = 59;
        minValue--;
      } else {
        clearInterval(timer);
        audio.play();
      }
    }
    if (hourValue > 0 && minValue == 0) {
      minValue = 59;
      hourValue--;
      if (hourValue == -1) {
        hourValue == 0;
      }
    }

    h.textContent =
      hourValue < 10 ? `${parseInt("0" + hourValue)}` : `${hourValue}`;
    m.textContent =
      minValue < 10 ? `${parseInt("0" + minValue)}` : `${minValue}`;
    s.textContent =
      secValue < 10 ? `${parseInt("0" + secValue)} ` : `${secValue}`;
    btn.style.display = "none";

    stop_btn.style.display = "inline-block";
  }, 1000);
  // } else {
  //   console.log("Please Enter Correct Time");
  // }
}

btn.addEventListener("click", startTimer);

reset_btn.addEventListener("click", function () {
  clearInterval(timer);
  secValue = 0;
  minValue = 0;
  hourValue = 0;
  console.log(hourValue, minValue, secValue);
  h.textContent = "0";
  m.textContent = "0";
  s.textContent = "0";
  flag = true;
  audio.pause();
  stop_btn.style.display = "none";
  btn.style.display = "inline-block";

  hours.style.display = "inline-block";
  sec.style.display = "inline-block";
  min.style.display = "inline-block";
  h.style.display = "none";
  m.style.display = "none";
  s.style.display = "none";

  hours.value = "";
  min.value = "";
  sec.value = "";
});

stop_btn.addEventListener("click", function () {
  clearInterval(timer);
  btn.style.display = "inline-block";
  stop_btn.style.display = "none";
  audio.pause();
  teethBrush= ""
  maggi_timer_id=""
  flag=false
});



teethBrush_timer.addEventListener("click",()=>{
  teethBrush = teethBrush_timer.getAttribute("id")
  startTimer()
})

maggi_timer.addEventListener("click",()=>{
  maggi_timer_id = maggi_timer.getAttribute("id")
  startTimer()
})