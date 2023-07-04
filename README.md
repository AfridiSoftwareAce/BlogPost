# BlogPost
BlogPost API

This is a RESTful API for a blog application. It provides endpoints to manage blog posts, comments, and user registration/authentication.

## Features

- Create, read, update, and delete blog posts
- Add comments to blog posts
- User registration and authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing
- Joi for input validation

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine
- MongoDB should be installed and running

### Installation

1. Clone the repository:

   
   git clone https://github.com/AfridiSoftwareAce/BlogPost.git
   

2. Install dependencies:

   
   npm install
   

### Configuration

1. Create a `.env` file in the root directory.
2. Set the following environment variables in the `.env` file:

   
   PORT=8000
   MONGODB_URI=<your-mongodb-uri>
   SECRET_KEY=<your-secret-key-for-jwt>
   

### Usage

1. Start the server:

   
   nodemon app.js
  

2. The API will be available at `http://localhost:8000`

## API Endpoints

- **POST /posts** - Create a new blog post
- **GET /posts** - Get all blog posts
- **GET /posts/:id** - Get a specific blog post
- **PUT /posts/:id** - Update a specific blog post
- **DELETE /posts/:id** - Delete a specific blog post
- **POST /posts/:id/comments** - Add a comment to a blog post
- **GET /posts/:id/comments** - Get all comments of a blog post
- **POST /register** - Register a new user
- **POST /login** - Authenticate a user and get a JWT token

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Contact

For any inquiries, please contact Afridi Wara at afridiwara@ymail.com.

---
