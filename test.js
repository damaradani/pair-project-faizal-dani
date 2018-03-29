const db = require('./models/');

//kalo mau akses semua table
// db.Company.findAll(
//     {
//       where:{id:1},
//       include:[
//         {
//           model: db.Job_vacancy,
//           include: [db.Candidate]
//         }
//       ]}
//     )
//   .then(x =>{
//     console.log(JSON.stringify(x, null, 2));
//   })
//   .catch()

//begini juga bisa
// db.Job_vacancy.findAll(
//     {
//       where:{id:1},
//       include:[db.Candidate, db.Company
//         // {
//         //   model: db.Candidate,
//         //   include: [db.Company]
//         // }
//       ]}
//     )
//   .then(x =>{
//     console.log(JSON.stringify(x, null, 2));
//   })
//   .catch()


// db.Candidates_job.findAll(
//     {
//       where:{id:1, Candidate},
//       include:[db.Candidate,
//         {
//           model: db.Job_vacancy,
//           include: [db.Company]
//         }
//       ]
//     }
//   )
//   .then(x =>{
//     console.log(JSON.stringify(x, null, 2));
//   })
//   .catch()

// db.Candidate.findOne({where:{id:1}})
//   .then(candidates =>{
//     console.log(candidates);
//     db.Job_vacancy.findAll(
//         {
//           include:[db.Company]
//         }
//       )
//       .then(x =>{
//         console.log(JSON.stringify(x, null, 2));
//       })
//       .catch()
//   })
//   .catch()


// db.Candidates_job.showCandidatesApply(5, db.Candidate, db.Job_vacancy, db.Company)
//   .then(candidatesJob =>{
//     console.log(JSON.stringify(candidatesJob, null, 2));
//   })
//   .catch(err =>{
//     console.log(err);
//   })

// db.Candidates_job.showJobVacancy(5, db.Candidate, db.Job_vacancy, db.Company)
//   .then(Job_vacancy =>{
//     console.log(JSON.stringify(Job_vacancy, null, 2));
//   })
//   .catch(err =>{
//     console.log(err.message);
//   })

// db.Job_vacancy.findAll(
//       {include:[db.Company]}
//     )
//   .then(x =>{
//     console.log(JSON.stringify(x, null, 2));
//   })
//   .catch()



//kalo mau akses Candidate dari job Job_vacancy
// db.Job_vacancy.findAll(
//     {include:
//       [db.Candidate],
//     }
//   )
//   .then(Company =>{
//     console.log(JSON.stringify(Company, null, 2));
//   })
//   .catch(err =>{
//     console.log(err.message);
//   })

//kalo mau akses Job_vacancy dari job Candidate
// db.Candidate.findAll(
//     {include:
//       [db.Job_vacancy],
//     }
//   )
//   .then(Company =>{
//     console.log(JSON.stringify(Company, null, 2));
//   })
//   .catch(err =>{
//     console.log(err.message);
//   })

db.Candidate.findOne(
   {
     where:{id:1}
   }
   )
 .then(Candidate =>{
   console.log(Candidate);
   db.Job_vacancy.findAll(
       {
         include: [{
           model: db.Company,
           where: { location: Candidate.location},
           as: 'Company' // specifies how we want to be able to access our joined rows on the returned data
         }]
         // ,
         //   where: {db.Company.location : 'Depok'}

       })
     .then(Jobs =>{
       console.log(JSON.stringify(Jobs, null, 2));
       
     })
     .catch(err =>{
       console.log(err);
     })
 })
 .catch(err =>{
   console.log(err);
 })

//contoh dari stack overflow
// models.products.findAll({
//   include: [
//     {model: models.comments, include: [models.comments.users] }
//   ]
// })
