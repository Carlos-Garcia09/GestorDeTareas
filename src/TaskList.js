import React from 'react';

function TaskList({ tasks, onCompleteTask }) {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className={task.completed ? 'completed-task' : ''}
            >
              {task.text}
            </span>
            <button
              className="complete-button"
              onClick={() => onCompleteTask(index)}
            >
              {task.completed ? 'Desmarcar' : 'Completar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;


