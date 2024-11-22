
"use client";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState<string>(""); // State to hold the current input value
  const [tasks, setTasks] = useState<string[]>([]); // State to hold the list of tasks

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value); // Update the input value in state
  };

  const addTask = () => {
    if (todo.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, todo]); // Add new task to the tasks array
      setTodo(""); // Clear the input field after adding the task
    } else {
      alert("Task cannot be empty!"); // Prevent adding empty tasks
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, id) => id !== index); // Remove task at the specified index
    setTasks(updatedTasks); // Update the tasks array
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 w-full h-screen p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          To-Do List
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a task"
            value={todo}
            onChange={handleInputChange} // Handle input changes
            className="flex-1 p-3 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-purple-300"
          />
          <button
            onClick={addTask} // Add task on button click
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition focus:outline-none focus:ring focus:ring-purple-300"
          >
            Add
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <span className="text-gray-800">{task}</span>
              <MdDelete
                onClick={() => deleteTask(index)} // Delete task on click
                className="text-red-500 text-xl cursor-pointer hover:text-red-700 transition"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
