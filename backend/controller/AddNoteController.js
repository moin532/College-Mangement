const AddNote = require("../models/AddNoteModel");
const Student = require('../models/studentModel')
const jwt = require("jsonwebtoken");

module.exports.AddNotes = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const DecodedToken = jwt.verify(token, process.env.JWt_Key);


    if (!DecodedToken) {
      return res.status(400).json({
        success: true,
        content: "invalid token",
      });
    }

    const { note } = req.body;

    const stdInfo = await Student.findById(DecodedToken.st_id);

    const noteData = await AddNote.create({
      name:stdInfo.name,
      email:stdInfo.name,
      note: note,
    });

    res.status(200).json({
      succes: true,
      msg: "Note Added SucessFully",
    });
  } catch (error) {
    res.status(400).json({
      succes: false,
      err: error.message,
    });
  }
};

module.exports.FetchAllNotes = async(req,res)=>{
    try {

        const AllNotes = await AddNote.find();



        res.status(200).json({
            succes:true,
            AllNotes
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            err : error.message
        })
    }
}