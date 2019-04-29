var mongoose=require('mongoose');
const _app=require('./config.js');
mongoose.connect('mongodb://'+_app.user+':'+_app.pwd+'@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useNewUrlParser: true});

var pet = mongoose.model('pets', { name: String, breed:String, pet_id:Number });

//querying with filters
//find can match exact values when used with ""
//eg:find({name:"Julie"}
//else you can use regular expressions without " " or ' ' as below
pet.find({breed:"German Shepherd"},function (err, pets) {//i is for case insensitive
  if (err) return console.error(err);
  for(i=0;i<pets.length;i++)
  console.log(pets[i].name+'--'+pets[i].breed);
});
console.log('Done');
