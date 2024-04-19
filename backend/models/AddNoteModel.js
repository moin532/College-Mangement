const mongoose = require("mongoose");

const AddNote = new mongoose.Schema({
  name: {
    type: String,
  },

  note: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("addNote", AddNote);
