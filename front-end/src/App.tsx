import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StudentProvider } from './context/studentContext';
import AddStudent from './components/addStudent';
import EditStudent from './components/editStudent';
import StudentList from './components/studentList';
import "./style/app.scss";

const App: React.FC = () => {
  return (
    <StudentProvider>
      <div className="container">      
      <Router>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </Router>      
      </div>
    </StudentProvider>
  );
};

export default App;
