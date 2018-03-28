const express = require('express')
const router = express.Router();
const db = require('../models');

//edit profile, add/delete vacancies, view applicants, change status

router.use(function(req, res, next){
  // console.log(req.session.role);
  // console.log(req.session.company);

  if(req.session.role == 'company'){
    next()
  }else{
    res.redirect('/');
  }
})

router.get('/', (req, res) => {

  // db.Job_vacancy.findAll({
  //   order: ['id'],
  //   include: [{
  //     model: db.Company,
  //     as: 'Company' // specifies how we want to be able to access our joined rows on the returned data
  //   }]
  // })
  // .then(jobs =>{
  //   db.Company.findAll()
  //   .then(vacancies => {
  //     res.render('company/index', {jobs: jobs, vacancies: vacancies})
  //   })
  // })
  // .catch(console.error)
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
    res.redirect('/')
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
  res.redirect('/company')
  //}
)
})



module.exports = router;
