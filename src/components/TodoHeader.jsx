import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

const TodoHeader = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [task, setTask] = useState("");

  function addTodo() {
    if(!task.trim())return;
    setTodos([...todos, { id: Date.now(), task: task, completed: false }]);
    setTask("");
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center bg-gradient-to-br from-blue-50 to-blue-200 py-10">
      <h1 className="font-bold mb-6 text-3xl text-blue-700 drop-shadow-lg tracking-wide">Todo List Application</h1>
      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          className="flex-1 border border-blue-300 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-800 shadow-sm text-base"
          placeholder="Enter your task..."
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
        />
        <button
          className="bg-blue-500 text-white px-8 py-3 rounded-r-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <TodoItem
            task={todo.task}
            key={todo.id}
            deleteItem={() => deleteTodo(todo.id)}
            checkItem={() => checkTodo(todo.id)}
            checked={todo.completed}
          />
        ))}
      </ul>
      <p className="mt-8 text-lg font-medium text-gray-700">
        Активные задачи:
        <span className="text-blue-600 font-bold">
          {" "}{todos.filter((t) => !t.completed).length}
        </span>
      </p>
    </div>
  );
};

export default TodoHeader;
