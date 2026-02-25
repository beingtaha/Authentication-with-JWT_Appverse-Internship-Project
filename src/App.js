import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>🛍️ E-Commerce JWT & Auth Project</h1>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        <footer className="app-footer">
          <p>
            Developed by <strong>Taha Ahmed</strong> | Internship ID:
            JAN26-FE14-14
          </p>
          <p>Appverse Technologies - Authentication with JWT</p>
          <p className="copyright">© 2026 All rights reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
