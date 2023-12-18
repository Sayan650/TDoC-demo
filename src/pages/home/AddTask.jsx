import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };
  return (
    <div>
      <h2>Add task</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>ADD</button>
    </div>
  );
};

export default AddTask;
