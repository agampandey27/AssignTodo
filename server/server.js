import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todos.js';
import * as dotenv from 'dotenv';
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));