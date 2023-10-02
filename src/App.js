import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Gestor de Tareas Personales</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onCompleteTask={completeTask} />
    </div>
  );
}

export default App;


