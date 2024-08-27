import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todos.js';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("data received");
  }); 

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));