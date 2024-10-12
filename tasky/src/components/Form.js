import React from "react";

const AddTaskForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          Task title:
          <input
            type="text"
            name="title"
            required
            onChange={(event) => props.change(event)}
            value={props.formState.title}
          />
        </label>
        <br />
        <label>
          Due date:
          <input
            type="date"
            name="deadline"
            required
            onChange={(event) => props.change(event)}
            value={props.formState.deadline}
          />
        </label>
        <br />
        <label>
          Details:
          <input
            type="text"
            name="description"
            onChange={(event) => props.change(event)}
            value={props.formState.description}
          />
        </label>
        <br />
        <label>
          Priority:
          <select 
            name="priority" 
            onChange={(event) => props.change(event)} 
            value={props.formState.priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTaskForm;
