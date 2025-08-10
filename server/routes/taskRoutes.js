const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Define routes and attach controller functions
router.get('/', taskController.getTasks);        // GET all tasks
router.post('/', taskController.createTask);     // POST create new task
router.put('/:id', taskController.updateTask);   // PUT update task by ID
router.delete('/:id', taskController.deleteTask);// DELETE task by ID

module.exports = router;
