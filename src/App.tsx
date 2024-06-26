import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom';
// import StudentList from '../src/pages/studentlist';
// import BatchList from '../src/pages/batchlist';
import './App.css';
import Training from './components/training';
import Attendance from './components/attendance';
import Mobilization from './components/mobilization';
import Grading from './components/grading';
import Students from './components/students';



const MainPage: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/mobilization">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/mobilization" element={<Mobilization />} />
          <Route path="/attendance" element={<Attendance options={[]} />} />
          <Route path="/training" element={<Training />} />
          <Route path="/students" element={<Students options={[]}  />} />
          <Route path="/grading" element={<Grading options={[]}  />} />

        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return <h2>Welcome to Student Batch Tracking System!</h2>;
};

export default MainPage;


