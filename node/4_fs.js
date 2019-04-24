var fs=require('fs');

var data = fs.readFileSync('4_readME.txt','utf8');
console.log(data);

// fs.writeFileSync('4_writeME.txt',data);

fs.unlinkSync('4_writeME.txt');

// // data1=fs.readFileSync('read_rupam.txt');
// // fs.writeFileSync('writeME.txt',data1+' from function');

fs.readFile('./4_readMe.txt','utf8',(err, data1) => {//async methods always need a function
  console.log(data1)
  // fs.writeFileSync('4_writeME.txt',data1+' from function');
});
console.log('test')
//function is an optional third param in async method
