import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function HomePage() {
  return <h1>Welcome to Monitoria de Frontend 2023.1</h1>;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
