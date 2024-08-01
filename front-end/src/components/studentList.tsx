import React, { useContext, useState } from "react";
import { StudentContext } from "../context/studentContext";
import { useNavigate } from "react-router-dom";
import Pagination from '../components/pagination';
import ConfirmModal from '../components/confirmModal';

const StudentList: React.FC = () => {
  const { students, deleteStudent } = useContext(StudentContext)!;
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setStudentToDelete(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (studentToDelete !== null) {
      deleteStudent(studentToDelete);
      setIsModalOpen(false);
    }
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setStudentToDelete(null);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1>Student Management System</h1>
        <button className="btn btn-header" onClick={() => navigate("/add")}>New student👨‍🎓 </button>
      </div>

      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Grade</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>({student.grade})</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <div className="actions">
                    <button className="btn btn-edit"  onClick={() => navigate(`/edit/${student.id}`)}>
                      ✏️
                    </button>
                    <button className="btn btn-delete" onClick={() => handleDelete(student.id)}>
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr/>
      <Pagination/>     
      {isModalOpen && (
        <ConfirmModal
          message="¿You're sure you want to delete this student?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default StudentList;

