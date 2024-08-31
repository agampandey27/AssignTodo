# ToDo List

This project is a simple ToDo List application built with a MERN stack, featuring a backend API using Express and a frontend interface using React. The application allows users to manage their tasks with basic CRUD operations (Create, Read, Update, Delete).

## Features

- User authentication with JWT (JSON Web Token).
- Secure password storage using bcryptjs.
- Form validation on both backend and frontend.
- Responsive design using Tailwind CSS.
- Integration with React Router for seamless navigation.

## Backend Dependencies

The backend of the application relies on the following dependencies:

- `bcryptjs` - for password hashing.
- `cors` - to allow cross-origin requests.
- `dotenv` - to manage environment variables.
- `express` - a web framework for Node.js.
- `express-validator` - for validating request data.
- `jsonwebtoken` - to handle JSON Web Tokens for authentication.
- `mongoose` - to interact with MongoDB.

## Frontend Dependencies

The frontend of the application uses:

- `@fortawesome/free-brands-svg-icons` and `@fortawesome/react-fontawesome` - for incorporating font awesome icons.
- `axios` - to make HTTP requests from the frontend to the backend.
- `react` - for building the user interface.
- `react-dom` - for rendering React components to the DOM.
- `react-router-dom` - to handle routing in the application.

## Installation

### Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be set up and running.

### Clone the repository

To clone the repository, use the following command:

```bash
git clone <repository-url>