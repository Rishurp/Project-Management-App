# Project Manager App

## Overview
The **Project Manager App** is a simple and intuitive web application that allows users to manage their projects effectively. Users can add, edit, view, and delete projects, ensuring better organization and tracking.

## Features
- **Add New Projects**: Includes fields for project name, client name, and deadline.
- **Edit Projects**: Update project details with ease using a modal interface.
- **Delete Projects**: Remove unwanted projects from the list.
- **Responsive Design**: The app is fully responsive and works seamlessly on all device sizes.
- **User-Friendly Interface**: Clean and simple UI designed with Tailwind CSS.

## Technologies Used
- **Frontend**:
  - React.js
  - Tailwind CSS
  - Axios
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-manager-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   Create a `.env` file in the root directory and configure the following:
   ```env
   PORT=8082
   MONGODB_URL=<your-mongodb-connection-string>
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
5. Run the React frontend:
   Navigate to the frontend directory and start the development server:
   ```bash
   cd client
   npm start
   ```
6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage
1. **Add Projects**:
   - Fill out the project name, client name, and deadline in the form.
   - Click the "Add Project" button to save.
2. **Edit Projects**:
   - Click the "Edit" button next to a project.
   - Modify the project details in the modal.
   - Save changes.
3. **Delete Projects**:
   - Click the "Delete" button next to a project to remove it.





## API Endpoints
- **GET /api/projects**: Retrieve all projects.
- **POST /api/projects**: Add a new project.
- **PUT /api/projects/:id**: Update a project by ID.
- **DELETE /api/projects/:id**: Delete a project by ID.

## Contribution
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License.


