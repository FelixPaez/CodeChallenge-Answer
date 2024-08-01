import { Router } from 'express';
import {
  getStudents,
  getStudentById,
  addStudent,
  editStudent,
  deleteStudent
} from '../controller/studentController';

const router = Router();

router.get('/students', getStudents);
router.get('/students/:id', getStudentById);
router.post('/students', addStudent);
router.put('/students/:id', editStudent);
router.delete('/students/:id', deleteStudent);

export default router;

