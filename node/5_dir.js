var fs=require('fs');

// fs.mkdirSync('5_new');

// console.log('5_new folder created');
// console.log('i will wait for the "new" folder to be created ');
fs.rmdirSync('5_new');

// fs.mkdir('5_new',function(){
//   fs.readFile('4_readMe.txt',function(err,data){
//     fs.writeFileSync('./5_new/writeME.txt',data);
//     console.log('5_new folder created');
//   });
// console.log('i will not wait for the "new1" folder to be created ');
// /*  fs.unlink('./new/writeME.txt',function(){
//     */
//     });