const express = require('express')
const router = express.Router()
const db = require('../models');

router.get('/', function(req, res){
  res.render('index');
})

router.post('/login', function(req, res){
  if (req.body.option === 'company') {

  } else {

  }
})

router.post('/register', function(req, res){
  if (req.body.option === 'company') {
    db.Company.create({
      email: req.body.email,
      password: req.body.password
    }).then( company => {
      res.render('company_form', { company: company })
    })
    // res.render('company_form', {company: req.body})
  } else {
    res.render('candidate_form')
  }
})

module.exports = router;
