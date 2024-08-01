import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StudentContext } from "../context/studentContext";

const EditStudent: React.FC = () => {
  const { students, editStudent } = useContext(StudentContext)!;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const studentToEdit = students.find((student) => student.id === Number(id));

  const [student, setStudent] = useState(
    studentToEdit || {
      firstName: "",
      lastName: "",
      email: "",
      age: 0,
      grade: "",
      id: 0,
    }
  );

  useEffect(() => {
    if (!studentToEdit) {
      navigate("/");
    }
  }, [studentToEdit, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editStudent(student);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Edit Student</h1>
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

          <div>
            <button className="btn btn-form" type="submit">
              Update🔄 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
