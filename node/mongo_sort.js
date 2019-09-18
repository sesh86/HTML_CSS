var mongoose=require('mongoose');
const _app=require('./config.js');
mongoose.connect('mongodb://'+_app.user+':'+_app.pwd+'@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useNewUrlParser: true});

var pet = mongoose.model('pet', { name: String, breed:String, pet_id:Number });
// let countries = mongoose.model('countries', { Country:String,ISO:String,Phone:String,Currency:String});

// countries.find(function (err, data) {
// console.log(data);
// });

//find/querying the document
// pet.find(function (err, pets) {
//   if (err) return console.error(err);
//     console.log(pets)
// //   for(i=0;i<pets.length;i++) console.log((pets[i]._id)+'--'+pets[i].name+'--'+pets[i].breed);
// });

//
pet.find({}).sort({breed:-1}).skip(1).limit(1).exec(function (err, data) {
  if (err) return console.error(err);
    console.log(data)
});

//Asc - 1, desc - -1