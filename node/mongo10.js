var mongoose=require('mongoose');
const _app=require('./config.js');
mongoose.connect('mongodb://'+_app.user+':'+_app.pwd+'@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useNewUrlParser: true});

var dept = mongoose.model('dept', { dept_name: String, dept_id:Number});
var emp = mongoose.model('emp', { name: String, dept_id:Number, emp_id:Number });

var d = new dept({ dept_id:1});
//find/querying the document
emp.findOne({ dept_id: 1}).
populate({select:'name'}).
exec(function (err, data) {
  if (err) return console.error(err);
    console.log(data)
});

/*
Cat.find({name:/^dann/},function (err, kittens) {
  if (err) return console.error(err);
  for(i=0;i<kittens.length;i++)
  console.log(kittens[i].name);
});
*/
