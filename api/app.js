require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var APIRouter = require("./routes/routeAPI");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/routeAPI", APIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(9000, () => {
  console.log(`Server Started at ${9000}`)
})

module.exports = app;

const getAnimals = () => database.get(`/getanimal/:id`)
module.exports = getAnimals;

const getAllAnimals = () => database.get(`/getAllanimal`)
module.exports = getAllAnimals;

const UpdateAnimalsbyId = () => database.patch('/update/:id')
module.exports = UpdateAnimalsbyId;

const deleteAnimalsbyId = () => database.delete(`/delete/:id`)
module.exports = deleteAnimalsbyId;

const addAnimals= () => database.post(`/post`)
module.exports = addAnimals;

const getCountry = () => database.get(`/getcountry`)
module.exports = getCountry;

