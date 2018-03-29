const express = require('express')
const router = express.Router();
const db = require('../models/');


router.use(function(req, res, next){
  console.log(req.session);
  if(req.session.role == 'candidate'){
    next()
  }else{
    res.redirect('/');
  }
})

//halaman utama Candidates
router.get('/', function(req, res){
  db.Job_vacancy.findAll(
        {include:[db.Company]}
      )
    .then(Jobs =>{
      //console.log(JSON.stringify(x, null, 2));
      res.render('candidates/index', {Jobs})
    })
    .catch(err =>{
      console.log(err);
    })

})


//halaman Edit Profile
router.get('/edit', function(req, res){
  res.render('candidates/editProfile')
})

router.post('/edit', function(req, res){
  // res.render('candidates/editProfile')
})

//halaman apply Jobs
router.get('/apply/:Jobsid', function(req, res){
  //id candidates dari seesion rencanannya
    // let candidates_Jobs ={
    //   CandidateId: req.session.something,
    //   JobVacancyId: req.params.id
    // }
  //yang status nanti di bikin di hooks beforeCreate isinya sesuai dari
  //
  //nanti masuk ke halaman dimana isinya tabel daftar
  //Jobs yang sudah di apply

  res.render('candidates/apply' )
})


module.exports = router;
