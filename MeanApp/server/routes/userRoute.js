var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.get('/GetUser', function(req, res){
  User.find({},function(err, data){
    if(err){
      throw err;
    }else{
      res.json(data);
    }
  });
});

router.post('/SaveUser', function(req, res){
  myUser = new User();
  myUser.FirstName=req.body.FirstName;
  myUser.LastName=req.body.LastName;
  myUser.Email=req.body.Email;
  myUser.Age=req.body.Age;
  myUser.Country=req.body.Country;
  myUser.save(function(err, docs){
    if(err){
      throw err;
    }else{
      console.log('Data Inserted Suceessfully');
      res.send('Data Inserted Suceessfully');
    }
  });
});

module.exports = router;
