import axios from 'axios';
import {Student} from '../interfaces/studentInterface'

const API_URL = 'http://localhost:5000/api/students'; 

// Obtener todos los estudiantes
export const getStudents = async () => {
  const response = await axios.get<Student[]>(API_URL);
  return response.data;
};

// Obtener un estudiante por ID
export const getStudentById = async (id: number) => {
  const response = await axios.get<Student>(`${API_URL}/${id}`);
  return response.data;
};

// Agregar un nuevo estudiante
export const addStudent = async (student: Omit<Student, 'id'>) => {
  const response = await axios.post<Student>(API_URL, student);
  return response.data;
};

// Editar un estudiante existente
export const editStudent = async (student: Student) => {
  const response = await axios.put<Student>(`${API_URL}/${student.id}`, student);
  return response.data;
};

// Eliminar un estudiante
export const deleteStudent = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
