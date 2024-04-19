const mongoose = require("mongoose");

//pass the refral
const SubjectSchema = new mongoose.Schema({
  _id: false,
  subjectName: { type: String,_id:false },
  marks: { type: Number,_id:false },
 
});

const studentSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "pls enter your name"],
    maxLength: [30, "Name cannot Exceed"],
    minLength: [4, "Name should be morethan 4 cahracter"],
  },
  email: {
    type: String,
    required: [true, "pls Enter your Email"],
    // unique: true,
  },

  uucmsNo: {
    type: String,
    // unique: true,
  },

  phoneNumber: {
    type: Number,
    // unique: true,
  },

  stdYear :{
    type: "String"
  },

  password: {
    type: String,
    required: [true, "pls Enter your password"],
    minLength: [8, "password should greater then 8"],
  },

  subjects: [
    SubjectSchema
  ],

  role: {
    type: String,
    default: "student",
  },

  TotalMarks :{
    type:Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  active: String,
  resetPasswordExpire: Date,
});



module.exports= mongoose.model('Student',studentSchema);