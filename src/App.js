import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import { Modal, Button, Alert} from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/dashboard" element={<EmployeeList />} /> 
      </Routes>
    </Router>
  );
}

export default App;
