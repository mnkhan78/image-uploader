import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
