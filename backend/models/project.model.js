const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  client: {
    type: String,
    required: true,
    trim: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true, 
});

const Project = mongoose.model('Project', projectSchema);

module.exports.Project = Project;
