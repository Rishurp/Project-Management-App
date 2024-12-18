import { useState, useEffect } from "react";
import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";
import axios from "axios";

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);

  const addProject = async (project) => {
    try {
      const response = await axios.post(
        "http://localhost:8082/api/projects",
        project
      );
      setProjects((prevProjects) => [...prevProjects, response.data]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const deleteProject = async (id) => {
    try {
      console.log(id + " " + projects);
      await axios.delete(`http://localhost:8082/api/projects/${id}`);
      setProjects(projects.filter((project) => project._id !== id));
    } catch (error) {
      console.log("Error deleting project", error);
    }
  };

  const editProject = async (project) => {
    try {
      await axios.put(
        `http://localhost:8082/api/projects/${project._id}`,
        project
      );
      setProjects(projects.filter((project) => project._id !== project._id));
    } catch (error) {
      console.log("Error editing project", error);
    }
  };

  const getAllProjects = async () => {
    const response = await axios.get("http://localhost:8082/api/projects");

    setProjects(response.data);
  };

  useEffect(() => {
    getAllProjects();
  }, [projects]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Project Manager</h1>
      <ProjectForm onAdd={addProject} />
      <ProjectTable
        projects={projects}
        onEdit={editProject}
        onDelete={deleteProject}
      />
    </div>
  );
};

export default ProjectManager;
