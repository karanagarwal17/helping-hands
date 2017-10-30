var express = require('express');
var multer = require('multer');
var path = require('path');
var router = express.Router();
var del = require('del');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'content/files/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

var upload = multer({storage: storage}).single('file');

router.post('/',function(req,res){
    upload(req,res,function(err){
      if (err) {
        console.log(err);
        res.status(401).json(err);
      } else {
        res.status(200).json('Upload Successfull!');
      }
    });
  });

router.route('/:nameId')
  .get(function(req,res){
    res.status(200).sendFile(req.params.nameId,{root: path.join(__dirname, "../content/files")});
  })
  .put(function(req,res){
    del(path.join(path.join(__dirname,"../content/files"),req.params.nameId));
    upload(req,res,function(err){
      if (err) {
        console.log(err);
        res.status(401).json(err);
      } else {
        res.status(200).json("Upload Successfull");
      }
    });
  })
  .delete(function(req,res){
    del(path.join(path.join(__dirname,"../content/files"),req.params.nameId)).then(res.json("Delete Successfull"));
  });

  module.exports = router;
