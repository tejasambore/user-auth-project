# User Authentication API
This project is a Node.js-based API for user authentication, including registration, login, and password reset functionality. It uses Express.js for handling HTTP requests, bcrypt for password hashing, and JSON Web Tokens (JWT) for session management.

---

## Features
- **User Registration:** Register new users with email, username, and password.
- **User Login:** Authenticate users with username and password, and return a JWT token.
- **Password Reset:** Update user password securely using email and a new password.

---

## Prerequisites
Ensure the following are installed on your local machine:
- [Node.js](https://nodejs.org/) (v14 or later)
- [Postman](https://www.postman.com/) (for API testing)
- [Git](https://git-scm.com/)

---

## Installatio
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-auth-project.git
   cd user-auth-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set the following environment variables:
   ```env
   SECRET_KEY=your_secret_key
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. The server will be running on:
   ```
   http://localhost:3000
   ```
   
---

## API Endpoints

### 1. Register User
- **URL:** `/register`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "password123"
  }
  ```

- **Response:**
  ```json
  {
      "message": "User registered successfully!"
  }
  ```

### 2. Login User
- **URL:** `/login`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
      "username": "john_doe",
      "password": "password123"
  }
  ```

- **Response:**
  ```json
  {
      "message": "Login successful!",
      "token": "your_jwt_token_here"
  }
  ```

### 3. Forgot Password
- **URL:** `/forgot-password`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`

- **Body:**
  ```json
  {
      "email": "john@example.com",
      "newPassword": "newPassword123"
  }
  ```

- **Response:**
  ```json
  {
      "message": "Password updated successfully!"
  }
  ```

---

## Testing
Use **Postman** or any API testing tool to test the endpoints. Ensure the server is running and the appropriate headers and body data are provided.

---

## Deployment
To host the project online, follow these steps:

### Hosting Options:
- **[Render](https://render.com/)**
- **[Railway](https://railway.app/)**
- **[Heroku](https://www.heroku.com/)**

1. Push your project to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Follow the hosting platform's deployment guide to deploy the app.

---

## Technologies Used
- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **bcrypt**: Password hashing.
- **JSON Web Tokens (JWT)**: Authentication.

---

## License
This project is licensed under the MIT License.

---

## Acknowledgments
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [bcrypt Documentation](https://www.npmjs.com/package/bcrypt)
- [JWT Documentation](https://jwt.io/introduction/)
