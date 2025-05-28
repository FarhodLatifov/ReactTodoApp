import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoWrapper from "./components/TodoWrapper";
import "./App.css";
import TodoHeader from "./components/TodoHeader";

function App() {
  return (
    <>
    <div className="flex justify-center w-screen">
      <TodoWrapper>
        <TodoHeader />
      </TodoWrapper>
    </div>
    </>
  );
}

export default App;
