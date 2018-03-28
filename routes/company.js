const express = require('express')
const router = express.Router();
const db = require('../models');

//edit profile, add/delete vacancies, view applicants, change status

router.get('/', (req, res) => {

  db.Company.findOne(
      {
        where:{id:1}, //belom ada session jadi pake id 1 dulu buat coba
        include:[
          {
            model: db.Job_vacancy,
            include: [db.Candidate]
          }
        ]}
      )
    .then(jobs =>{
      // console.log(JSON.stringify(x, null, 2));

      // db.Job_vacancy.findAll({
      //   where:{CompanyId:1},
      // }).then(vacancies =>{
        res.render('company/index', {jobs: jobs})
      // })

      // res.render('company/index', {jobs: jobs})
      // console.log(JSON.stringify(jobs.Job_vacancies[0].Candidates[0].Candidates_job));
      // console.log(JSON.stringify(jobs.Job_vacancies[0].name));

    })
    .catch()
})

router.get('/addvacancy/:id', (req, res) => {
  res.render('company/vacancyform')
})
router.post('/addvacancy/:id', (req, res) => {
  db.Item.create({
    name: req.body.name,
    field_of_work: req.body.field_of_work,
    required_gender: req.body.required_gender,
    required_age: req.body.required_age,
    required_education: req.body.required_education,
    required_experience: req.body.required_experience,
    salary: req.body.salary,
    status: 'open',
    CompanyId: req.params.id
  }).then( itemdata => {
    res.render('/company')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Company.findById(req.params.id)
    .then(company => {
      res.render('company_form', { company: company })
    })
})

router.post('/:id/edit', (req, res) => {
  db.Company.update({
    name: req.body.name,
    location: req.body.location,
    email: req.body.email,
    website: req.body.website,
    phone: req.body.phone
  },{
    where: { id: req.params.id }
  }).then(
    // (companyUpdated) => {
  res.render('/company')
  //}
)
})



module.exports = router;
