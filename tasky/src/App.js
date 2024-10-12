import './App.css';
import Task from './components/Task';
import AddTaskForm from './components/Form';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", done: false, priority: "low" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false, priority: "medium" },
      { id: 3, title: "Tidy up", description: "Tidy up the living room", deadline: "Today", done: false, priority: "high" }
    ]
  });

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "low" // Default priority
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
  };

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  };

  const formChangeHandler = (event) => {
    let form = { ...formState };

    switch (event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      case "priority":
        form.priority = event.target.value;
        break;
      default:
        form = formState;
    }

    setFormState(form);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formState.title || !formState.deadline) {
      alert("Please provide both title and deadline for the task.");
      return;
    }

    const tasks = [...taskState.tasks];
    const newTask = {
      id: uuidv4(),
      title: formState.title,
      description: formState.description,
      deadline: formState.deadline,
      done: false,
      priority: formState.priority // Include priority
    };

    tasks.push(newTask);
    setTaskState({ tasks });

    setFormState({
      title: "",
      description: "",
      deadline: "",
      priority: "low" // Reset form to default priority
    });
  };

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task
          key={task.id}
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          done={task.done}
          priority={task.priority}
          markDone={() => doneHandler(index)}
          deleteTask={() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm 
        change={formChangeHandler} 
        submit={formSubmitHandler} 
        formState={formState} 
      />
    </div>
  );
}

export default App;
