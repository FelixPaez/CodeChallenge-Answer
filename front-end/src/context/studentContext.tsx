import React, { createContext, useMemo, useState, ReactNode, useEffect, useCallback } from 'react';
import { getStudents, addStudent as apiAddStudent, editStudent as apiEditStudent, deleteStudent as apiDeleteStudent } from '../service/studentService';
import { Student } from '../interfaces/studentInterface';
import { StudentContextProps } from '../interfaces/contextProps';

export const StudentContext = createContext<StudentContextProps | undefined>(undefined);

export const StudentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Mostrar 10

  const fetchStudents = useCallback(async () => {
    try {
      const studentsFromApi = await getStudents();
      setStudents(studentsFromApi);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const addStudent = useCallback(async (student: Omit<Student, 'id'>) => {
    try {
      await apiAddStudent(student);
      fetchStudents(); 
    } catch (error) {
      console.error('Error adding student:', error);
    }
  }, [fetchStudents]);

  const editStudent = useCallback(async (student: Student) => {
    try {
      await apiEditStudent(student);
      fetchStudents(); 
    } catch (error) {
      console.error('Error editing student:', error);
    }
  }, [fetchStudents]);

  const deleteStudent = useCallback(async (id: number) => {
    try {
      await apiDeleteStudent(id);
      fetchStudents(); 
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  }, [fetchStudents]);

  const totalPages = useMemo(() => Math.ceil(students.length / itemsPerPage), [students.length, itemsPerPage]);

  const setPage = useCallback((page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  }, [totalPages]);

  const value = useMemo(() => ({
    students: students.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    addStudent,
    editStudent,
    deleteStudent,
    currentPage,
    totalPages,
    setPage
  }), [students, addStudent, editStudent, deleteStudent, currentPage, itemsPerPage, setPage, totalPages]);

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
};
