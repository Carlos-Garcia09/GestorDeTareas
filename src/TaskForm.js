import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <h2>Agregar Tarea</h2>
      <input type="text" value={task} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Agregar</button>
    </div>
  );
}

export default TaskForm;
