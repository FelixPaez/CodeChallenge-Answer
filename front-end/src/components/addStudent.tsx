import React, { useState, useContext } from "react";
import { StudentContext } from "../context/studentContext";
import { useNavigate } from "react-router-dom";

const AddStudent: React.FC = () => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    grade: "",
  });
  const { addStudent } = useContext(StudentContext)!;
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent = { ...student, id: Date.now() }; // Genera un ID único basado en el tiempo actual
    addStudent(newStudent);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Add Student</h1>
        <button className="btn btn-header" onClick={() => navigate("/")}>
          Back⬅️
        </button>
      </div>

      <div className="card-body other">
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="form-info">
            <div className="personal-data">
              <input
                name="firstName"
                placeholder="Name"
                value={student.firstName}
                onChange={handleChange}
                required
              />
              <input
                name="lastName"
                placeholder="LastName"
                value={student.lastName}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="other-data">
              <div className="age-input">
                <small>Age</small>
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  value={student.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <select
                name="grade"
                value={student.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
              </select>
            </div>
          </div>

          <div className="form-button">
            <button className="btn btn-form" type="submit">
              Add➕
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
