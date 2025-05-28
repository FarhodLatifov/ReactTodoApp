import React from "react";

const TodoItem = ({ task, deleteItem, checkItem, checked }) => {
  return (
    <li className="bg-white shadow-md rounded flex justify-between items-center w-full max-w-md p-4 font-semibold cursor-pointer text-gray-800 mt-3 border border-gray-200 transition hover:shadow-lg">
      <span
        onClick={checkItem}
        className={`flex-1 select-none ${checked ? 'line-through text-gray-400' : ''}`}
        style={{ wordBreak: 'break-word' }}
      >
        {task}
      </span>
      <button
        className="ml-4 px-3 py-1 rounded bg-red-100 text-red-500 hover:bg-red-200 transition-all duration-200 text-lg"
        onClick={deleteItem}
        title="Удалить задачу"
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
