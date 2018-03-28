const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./models/');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))

let index = require('./routes/index');
app.use('/', index);

let candidatesIndex = require('./routes/candidates');
app.use('/candidates', candidatesIndex);

let companyIndex = require('./routes/company');
app.use('/company', companyIndex);


app.listen(3000, function(){
  console.log('Server start on port 3000');
})
