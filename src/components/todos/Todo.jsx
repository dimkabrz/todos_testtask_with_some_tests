import React from "react";
import MyButton from "../../UI/button/MyButton";

const Todo = ({ todo, remove, toggle }) => {
  const spanClassname = todo.complete ? "crossed" : "uncrossed";

  return (
    <li data-testid="todo-element">
      <input
        data-testid="togglecheckbox"
        checked={todo.complete}
        type="checkbox"
        onChange={() => toggle(todo)}
      />
      <span data-testid="todo-value-element" className={spanClassname}>
        {todo.value}
      </span>
      <MyButton data-testid="deleteTodo-btn" onClick={(e) => remove(todo, e)}>
        delete todo
      </MyButton>
    </li>
  );
};

export default Todo;
