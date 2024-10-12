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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTaskForm;
