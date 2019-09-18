pet.find({}).skip(1).limit(1).exec(function (err, data) {
    if (err) return console.error(err);
      console.log(data)
  });