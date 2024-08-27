import Todo from '../models/Todo.js'; // Ensure to add `.js` extension

export const getTodos = async (req, res) => {
  try {
    // Fetch all todos for the logged-in user
    const todos = await Todo.find({ user: req.user.id }).sort({ date: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const addTodo = async (req, res) => {
  const { text } = req.body;

  try {
    // Create a new todo item
    const newTodo = new Todo({
      text,
      user: req.user.id, // Associate the todo with the logged-in user
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateTodo = async (req, res) => {
  const { text, completed } = req.body;

  try {
    // Find the todo by ID and ensure it belongs to the logged-in user
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    // Check if the user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Update the todo
    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: { text, completed } },
      { new: true }
    );

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deleteTodo = async (req, res) => {
  try {
    // Find the todo by ID and ensure it belongs to the logged-in user
    let todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    // Check if the user owns the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Delete the todo
    await Todo.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
