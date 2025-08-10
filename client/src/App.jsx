import React from 'react';
import TaskList from './components/TaskList';
import { useAuth } from './context/AuthContext';
import "./App.css";

// Main App component
function App() {
  const { role, loginAs } = useAuth();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Task Manager ({role.toUpperCase()})</h1>

      {/* Role switcher */}
      <button onClick={() => loginAs('user')}>Login as User</button>
      <button onClick={() => loginAs('admin')} style={{ marginLeft: '1rem' }}>Login as Admin</button>

      {/* Task management UI */}
      <TaskList />
    </div>
  );
}

export default App;


