var cors=require('cors');

const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',cors(),function(req,res){
	console.log(req.body);
	console.log(req.headers.jwt);
	res.send('Hosted');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
