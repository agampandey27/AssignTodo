import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todos.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({
      message: 'data received',
    });
  });

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(5000, () => console.log('Server started on port 5000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();