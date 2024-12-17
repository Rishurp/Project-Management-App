const { projectService } = require("../services");

const getProject = async (req, res) => {
  try {
    let response = await projectService.getProject();
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Error retrieving projects", error: error.message });
  }
};

const addProject = async (req, res) => {
  try {
    const { name, client, deadline } = req.body;

    const projectData = {
      name: name,
      client: client,
      deadline: new Date(deadline),
    };

    let response = await projectService.addProject(projectData);
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ msg: "Error adding project", error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    if (payload.deadline) {
      payload.deadline = new Date(payload.deadline);
    }

    const response = await projectService.updateProject(id, payload);
    if (!response) {
      return res.status(404).send({ msg: "Project not found" });
    }

    res.status(200).send({ msg: "Updated successfully", project: response });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Error updating project", error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await projectService.deleteProject(id);
    if (!response) {
      return res.status(404).send({ msg: "Project not found" });
    }
    res.status(200).send({ msg: "Deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Error deleting project", error: error.message });
  }
};

module.exports = {
  getProject,
  addProject,
  updateProject,
  deleteProject,
};
