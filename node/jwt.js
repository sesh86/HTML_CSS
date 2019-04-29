// const _app=require('./config.js')
const express=require('express')
const jwt = require('jsonwebtoken');

app=express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    var user={id:1,user:'sesh'}
    jwt.sign(user,'secret',
    // {expiresIn:10},
    (err,token)=>{
      res.status(200).json(token);
    })
  });
  app.get('/api/:token',(req,res)=>{
    var decoded = jwt.verify(req.params.token,'secret');
    console.log(decoded);
    // var decoded = jwt.decode(req.params.token);
    if(decoded.exp<Date.now()){
      res.send('Token Expired');
    }
    res.send(decoded);
  });
function verifyToken(token){
  if(!token) return 'Invalid';
  try{
    var decoded = jwt.verify(token,'secret');
    if(decoded.exp<Date.now()){
      res.send('Token Expired');
    }    
    return decoded;
  }
  catch(e){
    return 'Invalid'
  }
}  
  app.get('/getUserData',(req,res)=>{
   
    if(verifyToken(req.headers.jwt)==='Invalid'){res.send('Invalid Token')};

    let name=req.body.name;

    res.send(name);
  })      
  app.listen(3000);

  console.log('Application is running on http://localhost:'+ 3000);  