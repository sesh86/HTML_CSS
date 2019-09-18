pet.find({pet_id:{$lte:2}}).exec(function (err, data) {
    if (err) return console.error(err);
      console.log(data)
  });

  //lte - less than equal to, lt - less than
  //gte - greater than equal to, gt - greater than