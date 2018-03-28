const express = require('express')
const router = express.Router();

//halaman utama Candidates
router.get('/', function(req, res){
  res.render('candidates/index')
})

//halaman Edit Profile
router.get('/edit', function(req, res){
  res.render('candidates/editProfile')
})

router.post('/edit', function(req, res){
  // res.render('candidates/editProfile')
})



module.exports = router;
