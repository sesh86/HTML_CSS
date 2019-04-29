
var mongoose=require('mongoose');

const _app=require('./config.js');
mongoose.connect('mongodb://'+_app.user+':'+_app.pwd+'@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useNewUrlParser: true});

var pet = mongoose.model('pet', { name: String, breed:String, pet_id:Number });

var dog = new pet({ name: 'Cheetah',breed:'German Shepherd',pet_id:1 });
// var dog = new pet({ name: 'Julie',breed:'Bull Dog',pet_id:3 });


//insert new record into the document
dog.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('wowwww');
  }
});
