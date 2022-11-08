






function showTime(){
    let time = new Date();
    
   let hour = formatTime(time.getHours());
   let minute = formatTime(time.getMinutes());
   let second = formatTime(time.getSeconds());
   pm_am = "PM";


   if (hour> 12){
      hour=-12;
     pm_am = "PM"
   } else{
    pm_am ="AM";
   }

     let currentTime = hour + ":" + minute + ":" + second + " " + pm_am;
     let clock = document.querySelector(".clock").innerHTML = currentTime;

}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}


 
 function update(){
    showTime();
   setInterval(showTime, 1000);
 };

 update();


 

