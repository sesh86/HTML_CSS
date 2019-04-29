var mongoose = require('mongoose'),
  Schema = mongoose.Schema

const _app=require('./config.js');
mongoose.connect('mongodb://'+_app.user+':'+_app.pwd+'@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useNewUrlParser: true});

var userSchema = Schema({
  name: String,
  age: Number
});


var postSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String
});

var User = mongoose.model('User', userSchema);
var Post = mongoose.model('Post', postSchema);

u=new User({name:'sesh',age:20})
u.save(function (err) {console.log('saved');});

