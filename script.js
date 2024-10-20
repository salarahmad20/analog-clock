//to get refrence to dom elements
const body = document.querySelector("body") ,
hourhand = document.querySelector(".hour"),
minutehand = document.querySelector(".minute"),
secondhand = document.querySelector(".second"),
swithmode =  document.querySelector(".mode-switch")


// check if the mode of local storage is already dark
if(localStorage.getItem("mode") === "dark mode")
{
  body.classList.add("dark");
swithmode.textContent = "Light Mode" ;

}


// mode switch
swithmode.addEventListener("click", () => {
// togle dark class on body 
body.classList.toggle("dark");
const isDarkMode = body.classList.contains("dark");
console.log(isDarkMode);
// to set the text on the dark mode 
swithmode.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

// set local storage "mode" item based "dark"  class presence
localStorage.setItem("mode",isDarkMode ? "dark mode"  : "Light mode")
})


const updateTime = () => {
  //get current time and degree of 

  let date= new Date,
  secToDeg= (date.getSeconds() / 60) * 360,
  minToDeg= (date.getMinutes() / 60) * 360,
  hrToDeg= (date.getHours() / 12) * 360;

  // rotate the current clock to appropriate degree
  secondhand.style.transform = `rotate(${secToDeg}deg)`;
  minutehand.style.transform = `rotate(${minToDeg}deg)`;
  hourhand.style.transform = `rotate(${hrToDeg}deg)`;
}

//update the time to call it every second 

setInterval(updateTime, 1000)


//call update function on upload page
updateTime();
 