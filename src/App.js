import { useState } from "react";
import Todo from "./components/todos/Todo";
import MyButton from "./UI/button/MyButton";
import "./App.css";
import MyInput from "./UI/input/MyInput";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      value,
      id: Date.now(),
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };

  const removeTodo = (todo, e) => {
    e.preventDefault();
    setTodos(todos.filter((p) => p.id !== todo.id));
  };

  const toggleTodo = (todo) => {
    setTodos(
      todos.map((p) => {
        if (p.id !== todo.id) {
          return p;
        }
        return { ...p, complete: !p.complete };
      })
    );
  };

  const doneTodosLength = todos.filter((p) => p.complete === false).length;

  const [filter, setFilter] = useState("");

  const sortedCompleteTodo = (e) => {
    e.preventDefault();
    setFilter("completed");
  };

  const allTodos = (e) => {
    e.preventDefault();
    setFilter("all");
  };
  const sortedActiveTodo = (e) => {
    e.preventDefault();
    setFilter("uncompleted");
  };

  const clearTodos = (e) => {
    e.preventDefault();
    setTodos(todos.filter((p) => p.complete === false));
  };

  return (
    <div className="App">
      <div className="todo_topic">Todos</div>
      <div>
        <form className="add_todo_form">
          <MyInput
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="What needs to be done?"
          />
          <MyButton onClick={addTodo} data-testid="addToto-btn">
            add todo
          </MyButton>
          <ul className="todos_list">
            {todos
              .filter((p) => {
                if (filter === "completed") {
                  return p.complete === true;
                }
                if (filter === "uncompleted") {
                  return p.complete === false;
                }
                return true;
              })

              .map((todo, index) => (
                <Todo
                  data-testid="todo-element"
                  remove={removeTodo}
                  number={index + 1}
                  todo={todo}
                  key={todo.id}
                  toggle={toggleTodo}
                />
              ))}
          </ul>
          <div className="counter_left_todo">{doneTodosLength} items left</div>
          <div className="todos_filter_buttons">
            <MyButton onClick={allTodos}>All</MyButton>
            <MyButton
              data-testid="sorted-active-todo-btn"
              onClick={sortedActiveTodo}
            >
              Active
            </MyButton>
            <MyButton onClick={sortedCompleteTodo}>Complete</MyButton>
            <MyButton onClick={clearTodos}>Clear completed</MyButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
