import express from 'express';
import cors from 'cors';
import studentRoutes from './route/routes';
import db from './config/db';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', studentRoutes);

db.getConnection()
  .then(() => {
    console.log('Database connected!');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
