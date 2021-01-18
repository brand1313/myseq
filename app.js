const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/comments', commentsRouter);



module.exports = app;