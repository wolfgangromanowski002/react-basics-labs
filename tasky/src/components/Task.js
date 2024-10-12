import React from 'react';

const Task = (props) => {
  const getPriorityStyle = () => {
    switch (props.priority) {
      case 'low':
        return { 
          border: '2px solid #ccffcc', backgroundColor: '#006600' 
        };
      case 'medium':
        return { 
          border: '2px solid #ffcc99', backgroundColor: '#cc6600' 
        };
      case 'high':
        return { 
          border: '2px solid #ffcccc', backgroundColor: '#cc0000' 
        };
      default:
        return {};
    }
  };

  return (
    <div className="card" style={{ ...getPriorityStyle(), ...(props.done ? { backgroundColor: 'lightgrey', color: 'black' } : {}) }}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p>Priority: {props.priority}</p>
      <p className="description">{props.description}</p>
      <button onClick={props.markDone} className="doneButton">Done</button>
      <button className="deleteButton" onClick={props.deleteTask}>Delete</button>
    </div>
  );
}

export default Task;
