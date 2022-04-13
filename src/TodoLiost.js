import Todo from "./Todo";
const TodoLiost = ({ todo, deleteHAndeler, handelDone }) => {
  console.log("todo", todo);
  return (
    <div>
      {todo.map((e) => (
        <Todo
          todo={e}
          deleteHAndeler={deleteHAndeler}
          handelDone={handelDone}
        />
      ))}
    </div>
  );
};

export default TodoLiost;
