import { Request, Response } from 'express';
import db from '../config/db';
import { ResultSetHeader , RowDataPacket } from 'mysql2';
import {Student} from '../interface/student'

export const getStudents = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM students');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving students', error });
  }
};

export const getStudentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM students WHERE id = ?', [req.params.id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving student', error });
  }
};

export const addStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, age, grade } = req.body as Student;
    const [result] = await db.query<ResultSetHeader >(
      'INSERT INTO students (firstName, lastName, email, age, grade) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, email, age, grade]
    );
    const newStudentId = result.insertId; 
    res.status(201).json({ id: newStudentId, ...req.body });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error });
  }
};

export const editStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, age, grade } = req.body as Student;
    const [result] = await db.query<ResultSetHeader >(
      'UPDATE students SET firstName = ?, lastName = ?, email = ?, age = ?, grade = ? WHERE id = ?',
      [firstName, lastName, email, age, grade, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Student updated successfully' });
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
};

export const deleteStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const [result] = await db.query<ResultSetHeader >('DELETE FROM students WHERE id = ?', [req.params.id]);
    if (result.affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
};
