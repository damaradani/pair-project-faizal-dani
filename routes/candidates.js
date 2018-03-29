const express = require('express')
const router = express.Router();
const db = require('../models/');
const convertDate = require('../helper/convertDate');

router.use(function(req, res, next){
  // console.log(req.session);
  if(req.session.role == 'candidate'){
    next()
  }else{
    res.redirect('/');
  }
})

//halaman utama Candidates
router.get('/', function(req, res){
  // db.Job_vacancy.findAll(
  //       {include:[db.Company]}
  //     )
  //   .then(Jobs =>{
  //     //console.log(JSON.stringify(x, null, 2));
  //     res.render('candidates/index', {Jobs})
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   })
  let candidateId = req.session.candidate.id;

  db.Candidates_job.showJobVacancy(candidateId, db.Candidate, db.Job_vacancy, db.Company)
    .then(Jobs =>{
      console.log(JSON.stringify(Jobs, null, 2));
      res.render('candidates/index', {Jobs})
    })
    .catch(err =>{
      console.log(err.message);
    })

})


//halaman Edit Profile
router.get('/edit', function(req, res){

  let candidate = req.session.candidate;
  console.log(candidate);
  res.render('candidates/editProfile', {candidate})
})

router.post('/edit', function(req, res){
  // res.render('candidates/editProfile')

  let candidateId = req.session.candidate.id;
  let candidate = {
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    location: req.body.location,
    email: req.body.email,
    phone: req.body.phone,
    expected_sallary: req.body.expected_sallary,
    experience: req.body.experience,
    field_of_work: req.body.field_of_work,
    education: req.body.education
  }
  // console.log(candidate);
  // console.log(req.session);

  db.Candidate.update(candidate, {where:{id:candidateId}})
    .then(result =>{
      // console.log(result);
      res.send('Profile Succesfully updated');
    })
    .catch(err =>{
      console.log(err.message);
    })
})

//halaman apply Jobs
router.get('/apply', function(req, res){
  let CandidateId = req.session.candidate.id;
  // db.Candidates_job.findAll(
  //   {
  //     where:{CandidateId:CandidateId},
  //     include:[db.Candidate,
  //       {
  //         model: db.Job_vacancy,
  //         include: [db.Company]
  //       }
  //     ]
  //   }
  // )
  res.locals.convertDate = convertDate;

  db.Candidates_job.showCandidatesApply(CandidateId, db.Candidate, db.Job_vacancy, db.Company)

    .then(candidatesJob =>{
      console.log(candidatesJob);
      res.render('candidates/apply', {candidatesJob});
    })
    .catch(err =>{
      console.log(err.message);
    })

})

router.get('/apply/:Jobsid', function(req, res){

    let candidates_Jobs ={
      CandidateId: req.session.candidate.id,
      JobVacancyId: req.params.Jobsid,
      status: 'Applied'
    }
    db.Candidates_job.create(candidates_Jobs)
      .then(result =>{
        // req.locals.alert = `You Succesfully apllied for ${}`;
        res.redirect('/candidates/apply');
      })
      .catch(err =>{
        console.log(err.message);
      })

    // console.log(candidates_Jobs);
  //yang status nanti di bikin di hooks beforeCreate isinya sesuai dari
  //
  //nanti masuk ke halaman dimana isinya tabel daftar
  //Jobs yang sudah di apply

  // res.render('candidates/apply' )
})

router.get('/apply/delete/:CandidateId/:JobVacancyId', function(req, res){
  let CandidateId = req.params.CandidateId;
  let JobVacancyId = req.params.JobVacancyId;
  //nanti delete where candidateId sama JobVacancyId
  db.Candidates_job.destroy(
    {where:{CandidateId, JobVacancyId}}
  )
    .then(result =>{
      console.log(result);
      res.send(`${CandidateId}  ${JobVacancyId}`);
    })
    .catch(err =>{
      console.log(err.message);
    })


})


module.exports = router;
