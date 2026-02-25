# 🔐 JWT Authentication System

> A secure authentication system built with React that implements JWT-based login functionality for an e-commerce platform. Users can log in with their credentials, receive a JWT token, and access a protected dashboard with their profile information.

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) 
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) 
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white) 
![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)

---

## 📱 Features

|   | Feature           | Description                                      |
|---|-------------------|--------------------------------------------------|
| 🔑 | **Login System**  | User authentication with username/password       |
| 🎫 | **JWT Token**     | Token received from API and stored in localStorage |
| 🛡️ | **Protected Dashboard** | Only accessible with valid token            |
| 👤 | **User Profile**  | Displays user details after login                 |
| ⚠️ | **Error Handling** | Shows friendly messages for invalid credentials   |
| 🚪 | **Logout**        | Clears token and redirects to login               |
| 📱 | **Responsive UI** | Works on all devices                              |

---

## 🔄 Authentication Flow

1. User enters username and password
2. API call made to DummyJSON auth endpoint
3. If valid → JWT token received and stored
4. User redirected to dashboard
5. Dashboard shows user information
6. On logout → token cleared, redirect to login

---

## 🚀 Tech Stack

| Frontend | Routing | API Calls | Storage | Styling |
|---|---|---|---|---|
| React | React Router | Axios | LocalStorage | CSS3 |
| JavaScript (ES6) | | DummyJSON API | | |
| HTML5 | | | | |

---

## ⚠️ Error Handling

| Scenario | User Message |
|---|---|
| Empty fields | "Please fill all fields" |
| Wrong credentials | "Invalid credentials" |
| Network issue | "Network error" |
| Unauthorized access | Redirect to login |

---

## 🚀 Quick Start

# Clone the repository
git clone https://github.com/beingtaha/Authentication-with-JWT_Appverse-Internship-Project.git

# Navigate to project directory
cd Authentication-with-JWT_Appverse-Internship-Project

# Install dependencies
npm install

# Start development server
npm start

# Open in browser
http://localhost:3000

---

## 🧠 Key Learnings

✅ JWT Authentication: Implementing token-based authentication flow.

✅ Protected Routes: Using wrapper components to restrict access.

✅ LocalStorage Management: Storing and retrieving JWT tokens securely.

✅ API Integration: Making POST requests to authentication endpoints.

✅ Error Handling: Displaying user-friendly messages for different scenarios.

✅ State Management: Managing authentication state across components.

✅ Conditional Rendering: Showing different UI based on login status.

---

## 🗓️ Project Structure

Authentication-with-JWT/

├── public/

│   └── index.html

├── src/

│   ├── pages/

│   │   ├── Login.js         # Login form component

│   │   └── Dashboard.js      # Protected dashboard

│   ├── services/

│   │   ├── api.js           # Axios configuration

│   │   └── authService.js    # Authentication functions

│   ├── App.js                # Main app with routes

│   └── index.js              # Entry point

├── package.json

└── README.md

---

## 🔒 Protected Routes Implementation

Dashboard route is protected using a wrapper component:

✅ Checks for token in localStorage

✅ No token → automatic redirect to login

✅ Token present → access granted

---

# 👨‍💻 Developer: Taha Ahmed

# 🐙 GitHub: @beingtaha

# 📌 Internship ID: JAN26-FE14-14

# 🏢 Appverse Technologies Intern

---------------------------------------------------------------------------------------

# 📄 Note
This project is created for educational purposes as part of the Appverse Technologies Internship Program.

----------------------------------------------------------------------------------------

# ⭐ If you find this helpful, consider giving it a star!
