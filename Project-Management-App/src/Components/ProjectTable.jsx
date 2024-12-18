import { useState } from "react";

const ProjectTable = ({ projects, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const handleEditClick = (project) => {
    setEditProject(project); // Set the project to be edited
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditProject(null); 
  };

  const handleSave = () => {
    if (editProject) {
      onEdit(editProject); 
    }
    handleModalClose();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 text-left">Project Name</th>
              <th className="px-4 py-2 text-left">Client Name</th>
              <th className="px-4 py-2 text-left">Deadline</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-t border-gray-300 hover:bg-gray-100"
                >
                  <td className="px-4 py-2">{project.name}</td>
                  <td className="px-4 py-2">{project.client}</td>
                  <td className="px-4 py-2">
                    {new Date(project.deadline).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handleEditClick(project)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(project.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">
                  No projects added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-md shadow-md p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Edit Project</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={editProject?.name || ""}
                  onChange={(e) =>
                    setEditProject({ ...editProject, name: e.target.value })
                  }
                  className="border border-gray-300 rounded-md w-full px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  value={editProject?.client || ""}
                  onChange={(e) =>
                    setEditProject({ ...editProject, client: e.target.value })
                  }
                  className="border border-gray-300 rounded-md w-full px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  value={
                    editProject?.deadline
                      ? new Date(editProject.deadline)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setEditProject({ ...editProject, deadline: e.target.value })
                  }
                  className="border border-gray-300 rounded-md w-full px-3 py-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTable;
