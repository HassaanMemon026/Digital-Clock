let houres = document.querySelector(".houres");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let date = document.querySelector(".date");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
setInterval(function() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let dt = now.getDate();
  let mt = now.getMonth();
  let yt = now.getFullYear();
  houres.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  date.innerHTML = dt + "-";
  month.innerHTML = (mt + 1) + "-";
  year.innerHTML = yt;
const colors = ['blue', 'red', 'green', 'pink', 'orange', 'yellow','aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure','beige', 'bisque', 'blanchedalmond', 'blue', 'white','blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'purple','silver', 'gold', 'brown', 'gray', 'blue', 'red', 'pink', 'magenta','orange'];
document.querySelectorAll('.color').forEach(function (element){
  element.style.color = random(); // Call the random function here
})
function random(){
  return colors[Math.floor(Math.random() * colors.length)];
}
}, 1000)

