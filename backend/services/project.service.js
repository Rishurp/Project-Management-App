const { Project } = require("../models");

const addProject = async (data) => {
  const project = await Project.create(data);
  return project;
};

const getProject = async () => {
  const projects = await Project.find();
  return projects;
};

const updateProject = async (id, updateData) => {
  const project = await Project.findByIdAndUpdate(id, updateData, { new: true });
  return project;
};

const deleteProject = async (id) => {
  const project = await Project.findByIdAndDelete(id);
  return project;
};

module.exports = {
  addProject,
  getProject,
  updateProject,
  deleteProject,
};
