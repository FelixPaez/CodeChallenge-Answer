import { Student } from "./studentInterface";

export interface StudentContextProps {
  students: Student[];
  addStudent: (student: Omit<Student, 'id'>) => Promise<void>;
  editStudent: (student: Student) => Promise<void>;
  deleteStudent: (id: number) => Promise<void>;
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}