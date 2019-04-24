//https://nodejs.org/api/globals.html
let time=0;

var timer=setInterval(function () {
  time+=2;
  console.log(time+' seconds have passed');

}, 2000);
