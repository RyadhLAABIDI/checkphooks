import React, { useState } from "react";
import TodoLiost from './TodoLiost';
import AddTodo from './AddTodo';
const App = () => {
  const [todo, setTodo] = useState([
    { text: "first todo list ", id: 1, isDone: false },
    { text: "scd todo", id: 2, isDone: false },
    { text: "3eme todo", id: 3, isDone: false }
  ]);

  const deleteHAndeler = (ID) => {
    setTodo(todo.filter((e) => e.id !== ID));
  };

  const handelDone = (ID) => {
    setTodo(
      todo.map((el) => (el.id === ID ? { ...el, isDone: !el.isDone } : el))
    );
  };

  const handelAdd = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <hr />
      <p>Add Todo </p>
      <AddTodo handelAdd={handelAdd} />
      <p>Todo list </p>
      <TodoLiost
        todo={todo}
        deleteHAndeler={deleteHAndeler}
        handelDone={handelDone}
      />

      <hr />
    </div>
  );
};

export default App;
