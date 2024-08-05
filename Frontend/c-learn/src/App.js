import './App.css';
import Overview from './pages/Overview';
import Exercise from './pages/Exercise';
import Trynow from './pages/Trynow';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Homepage from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Homepage/>} />
          <Route path="/Overview" element={<Overview/>} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Trynow" element={<Trynow />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
