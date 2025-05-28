import React from "react";

const TodoWrapper = ({ children }) => {
  return (
    <div className="w-screen flex justify-center items-center h-screen flex-col">
      {children}
    </div>
  );
};

export default TodoWrapper;
