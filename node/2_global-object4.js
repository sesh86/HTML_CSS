
//https://nodejs.org/api/globals.html
console.log(__dirname);
console.log(__filename);

var time=0;
var milli=1000;
var timer=setInterval(function () {
  time+=2;
  console.log(time+' seconds have passed');
  result_data=[];
  // if(Object.keys(result_data).length==0) console.log('hi');
  //else{console.log('hello');}
  if(time > 5){
    clearInterval(timer);
  }

}, 2*milli);


module.exports.getResultDetails = function(){console.log('hi');check()}



 check=function(){console.log("check")}

check()
