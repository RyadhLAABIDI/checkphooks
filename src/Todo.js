import React from "react";

const Todo = ({ todo, deleteHAndeler, handelDone }) => {
  console.log("todo comp 2", todo);

  const delteTodo = () => {
    deleteHAndeler(todo.id);
  };

  const Done = () => {
    handelDone(todo.id);
  };

  return (
    <div>
      <ul style={{ display: "flex" }}>
        <li style={todo.isDone ? { backgroundColor: "red" } : {}}>
          {" "}
          {todo.text}{" "}
        </li>

        <button onClick={() => delteTodo()}>remove</button>

        <button onClick={() => Done()}>
          {" "}
          {todo.isDone ? "Yep you did it " : "Done"}{" "}
        </button>
      </ul>
    </div>
  );
};

export default Todo;
