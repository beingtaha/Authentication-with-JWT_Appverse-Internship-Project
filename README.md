# 🔐 JWT Authentication System

> A secure authentication system built with React that implements JWT-based login functionality for an e-commerce platform. Users can log in with their credentials, receive a JWT token, and access a protected dashboard with their profile information.

---

## 📱 Features

| | Feature | Description |
|---|---|---|
| 🔑 | **Login System** | User authentication with username/password |
| 🎫 | **JWT Token** | Token received from API and stored in localStorage |
| 🛡️ | **Protected Dashboard** | Only accessible with valid token |
| 👤 | **User Profile** | Displays user details after login |
| ⚠️ | **Error Handling** | Shows friendly messages for invalid credentials |
| 🚪 | **Logout** | Clears token and redirects to login |
| 📱 | **Responsive UI** | Works on all devices |

---

## 🔄 Authentication Flow

```mermaid
graph LR
    A[User Enters<br>Credentials] --> B{API Call to<br>DummyJSON};
    B -->|Valid| C[Receive JWT Token<br>& Store in localStorage];
    B -->|Invalid| D[Show Error Message];
    C --> E[Redirect to<br>Dashboard];
    E --> F[Display User Info];
    F --> G[Logout:<br>Clear Token & Redirect];

---


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

```bash
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
