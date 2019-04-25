//install ejs before executing this file
var express = require ('express');
var express = require ('express');
var app=express();
app.use('/Static',express.static('Static'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/7_index.html');
});

app.get('/contact',function(req,res){
  res.sendFile(__dirname+'/7_contact.html')
});

app.get('/profile/:name',function(req,res){
  //res.send('You are in '+req.params.name+"'s profile");
  res.render('profile');
});

app.post('/about',(req,res)=>{
res.send('about')
});

app.get('/login',(req,res)=>{
  console.log(req.query)
  res.send('about')
  });
  
app.listen(3000);
