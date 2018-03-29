const express = require('express')
const router = express.Router()
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function(req, res){
  res.render('index');
})

router.post('/login', function(req, res){
  // console.log(req.body);

  let plainPassword = req.body.password;

  if (req.body.option === 'company') {
    db.Company.findOne({where:{email: req.body.email}})
      .then(company =>{

        bcrypt.compare(plainPassword, company.password, function(err, result) {
         if(result) {
          // Passwords match
          // console.log('Kesini');
          req.session.company = company;
          req.session.role = 'company';
          console.log(req.session.company);
          console.log(req.session.role);
          res.redirect('/company');
          // res.send(req.session.company, req.session.role);
         } else {
          // Passwords don't match
         }
        });

      })
      .catch(err =>{
        console.log(err.message);
      })
  } else {
    db.Candidate.findOne({where:{email: req.body.email}})
      .then(candidate =>{

        bcrypt.compare(plainPassword, candidate.password, function(err, result) {
         if(result) {
          // Passwords match

          req.session.candidate = candidate;
          req.session.role = 'candidate';
          // console.log(req.session.candidate);
          // console.log(req.session.role);
          res.redirect('/');
          // res.send(req.session.company, req.session.role);
         } else {
          // Passwords don't match
         }
        });

      })
      .catch(err =>{
        console.log(err.message);
      })
  }
})

router.post('/register', function(req, res){
  let plainPassword = req.body.password;

  //salt ny g usah di masukin ke db
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
      let passwordAfterBcrypt = hash;// console.log(hash);
      // console.log(salt);
      if (req.body.option === 'company') {
        db.Company.create({
            email: req.body.email,
            password: passwordAfterBcrypt
          })
          .then(company => {
            console.log(company);
            res.render('company_form', { company: company })
          })
          .catch()
        // res.render('company_form', {company: req.body})
      } else {
        //Candidates
        db.Candidate.create({
            email: req.body.email,
            password: passwordAfterBcrypt
        })
        .then(candidate =>{
            console.log(candidate);
            res.render('candidates/editProfile')
        })
        .catch(err =>{
            console.log(err.message);

        })
        // res.render('candidate_form')
      }
    });
  });

})

router.get('/logout', function(req,res){
  req.session.destroy(function(err) {
    res.redirect('/')// cannot access session here
  })
})

module.exports = router;
