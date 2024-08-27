import express from 'express';
import auth from '../middleware/auth.js';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todoController.js'; 

const router = express.Router();

router.get('/', auth, getTodos);
router.post('/', auth, addTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);

export default router;
