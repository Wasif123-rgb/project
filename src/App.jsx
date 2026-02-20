import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// Temporary placeholder for Login so the route won't crash
function Login() {
  return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Login Page</h2>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}