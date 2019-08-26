const mongoose = require('mongoose');
const TaskSchema = require('./Task');


const { Schema } = mongoose;


const RegimenSchema = new Schema({
  user: {
    type: String,
    required: 'User is required',
    trim: true,
  },
  intensity: {
    type: String,
    required: 'intensity is required',
    trim: true,
  },
  plan: {
    type: String,
    required: 'plan is required',
    trim: true,
  },
  length: {
    type: Number,
    trim: true,
    default: 10,
  },
  tasks: [TaskSchema],
});

const Regimen = mongoose.model('Regimen', RegimenSchema);

module.exports = {
  Regimen,
  RegimenSchema,
};
