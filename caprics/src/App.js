import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ResetPswd from "./components/ResetPswd";
import AdminCapricsMaster from "./components/AdminCapricsMaster";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPswd />} />
          <Route path="/caprics-master" element={<AdminCapricsMaster />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
