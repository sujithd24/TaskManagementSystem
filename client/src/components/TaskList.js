import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const TaskList = () => {
    // useState hook
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const { role } = useAuth();


//   useEffect hook
  useEffect(() => {
    const fetchTasks = async () => {
        // API call 
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!newTask) return;
    // API call 
    const res = await axios.post('http://localhost:5000/api/tasks', {
      title: newTask,
      description: '',
      completed: false,
    });
    setTasks([...tasks, res.data]);
    setNewTask('');
  };

  const deleteTask = async (id) => {
    if (role !== 'admin') return alert('Only admin can delete tasks');
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="task-list">
      <div className="input-section">
        <input
          className="input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button className="btn" onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-items">
        {tasks.map(task => (
          <li key={task._id} className="task-item">
            <span>{task.title}</span>
            {role === 'admin' && (
              <button className="btn btn-delete" onClick={() => deleteTask(task._id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


