var sayHi=function(){
  console.log('hi');
}
var sayBye=function(){
  console.log('Bye');
}

//sayHi();
callFunction(sayHi,sayHi);

function callFunction(fun,fun1){//this is a callback function
console.log('im callBack Function');
fun();
fun1();
}
