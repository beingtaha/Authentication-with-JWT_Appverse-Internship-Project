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
