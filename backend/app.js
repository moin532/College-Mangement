const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

dotenv.config({path : './config/config.env'});


const StudentRouter = require('./routes/studentRoute');
const addNote = require('./routes/AddNoteRoute');

app.use('/api/v1/',StudentRouter);
app.use('/api/v1/',addNote);



module.exports = app