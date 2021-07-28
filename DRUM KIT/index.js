// Detecting mouse click on buttons on screen 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrumButtons; i++)
{
  var a = document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonanderHTML = this.innerHTML;
   makesound(buttonanderHTML);
   buttonAnimation(buttonanderHTML)
  });
}


// detecting key press
document.addEventListener("keypress", function(event)
{
  makesound(event.key);  
                              // passing the key from the keyboard into the makesound function
  buttonAnimation(event.key)
                            })

// main player checking the cases from both key and click
function makesound(key){
  switch (key) {
    case "w":
      var audio= new Audio("sounds/tom-1.mp3")  
      audio.play();
      break;
    case "a":
      var audio= new Audio("sounds/tom-2.mp3")  
      audio.play();
      break;
    case "s":
      var audio= new Audio("sounds/tom-3.mp3")  
      audio.play(); 
      break;
    case "d":
      var audio= new Audio("sounds/tom-4.mp3")  
      audio.play();
      break;
    case "j":
      var audio= new Audio("sounds/snare.mp3")  
      audio.play();
      break;
    case "k":
      var audio= new Audio("sounds/kick-bass.mp3")  
      audio.play();
      break;
    case "l":
      var audio= new Audio("sounds/crash.mp3")  
      audio.play();
      break;
  
    default: 
      break;
  }

}
function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}










