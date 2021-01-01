const mongoose = require("mongoose");

const marathonSchema = new mongoose.Schema({
  rank: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  finishtime: {
    type: String,
    required: true,
  }
});

const Marathon = new mongoose.model("marathondata", marathonSchema);

module.exports = Marathon;
