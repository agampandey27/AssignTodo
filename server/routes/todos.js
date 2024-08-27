import express from 'express';
import auth from '../middleware/auth.js'; // Ensure to add `.js` extension
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todoController.js'; // Ensure to add `.js` extension

const router = express.Router();

router.get('/', auth, getTodos);
router.post('/', auth, addTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);

export default router;
