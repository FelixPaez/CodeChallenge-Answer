import mysql from 'mysql2';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_db'
});

export default connection.promise();
