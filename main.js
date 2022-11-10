






function showTime(){
    let time = new Date();
    
   let hour = formatTime(time.getHours());
   let minute = formatTime(time.getMinutes());
   let second = formatTime(time.getSeconds());
   let pm_am;


  if (hour>=12 && hour >=24){
     
     pm_am = "PM";
    } else{
    pm_am ="AM";
    }
// ai PM da AM verafrit davalage 

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


 let slides = document.querySelectorAll(".slide");
 let next = document.querySelector(".next");
 let prev = document.querySelector(".prev");
 let button = document.querySelectorAll(".dot");


let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
 let image =document.querySelector("img");





 let activeIndex = 0;

 function renderSliders() {
	slides.forEach((slide, index) => {
		

		if (activeIndex === index) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
};
 
function nextSlide(){

    if(activeIndex === slides.length -1){
        activeIndex=0;
    } else{
        activeIndex++;
    }
    renderSliders();
}

function prevSlide(){

    if (activeIndex===0){
        activeIndex = slides.length-1;
    } else{
        activeIndex--;
    }
   
    renderSliders();
}
 
// let buttonIndex=0;

// function pushButton(){
//      button.forEach((dot, index) =>{
//              if (buttonIndex === slide.index){
//                 renderSliders();
//              } 
//      });
// }

let audioStart = null;
stop.addEventListener('click', stopAudioSLide);
start.addEventListener('click', startAudioSlide);
 

 function stopAudioSLide(){
    if( audioStart){
        clearInterval(audioStart);
        audioStart = null;
    }
 }

function startAudioSlide(){
    audioStart = setInterval(nextSlide,1000);
}

//  function onMouse(){
//     if(onmouseOver){
//         stopAudioSLide;
//     }
//  }

 function initSlider(){
    renderSliders();
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
    // button.addEventListener('click', pushButton);
    startAudioSlide();
    stopAudioSLide()
   
   
   
 }

 
//  mokled vegar chavujeki kvelafers kargad rom gavrkveulikavi logika titkos mesmis mousis eventebic ver movastari 
// tesierad rom tamekitxa. 



 initSlider();
