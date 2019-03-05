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
  myUser.Password=req.body.Password;
  // myUser.rePassword=req.body.rePassword;
  myUser.save(function(err, docs){
    if(err){
      throw err;
    }else{
      console.log('Data Inserted Suceessfully');
      res.send('Data Inserted Suceessfully');
    }
  });
});

router.delete('/DeleteUser/:id',function(req, res){
User.remove({_id:req.params.id},function(err, docs){
    console.log('User Removed Successfully');
  });
});



module.exports = router;
