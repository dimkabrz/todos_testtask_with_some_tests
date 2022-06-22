import {
  getByPlaceholderText,
  getByRole,
  render,
  screen,
  fireEvent,
  within,
} from "@testing-library/react";
import App from "./App";

describe("testing first state", () => {
  test("add/delete-todo-element", () => {
    render(<App />);
    const addTodoBtn = screen.getByTestId("addToto-btn");
    expect(
      screen.queryByTestId("todo-element")
    ).toBeNull(); /*проверяем отсутствие элемента одной тудушки*/
    fireEvent.click(addTodoBtn); /*/!*'эмуляция нажатия на кнопку*!/*/
    expect(
      screen.getByTestId("todo-element")
    ).toBeInTheDocument(); /*проверяем создалась ли тудушка после нажатия на кнопку*/
    const checkboxToggle = screen.getByTestId("togglecheckbox");
    expect(screen.getByTestId("todo-value-element")).toHaveClass(
      "uncrossed"
    ); /*ожидаем что у туду есть класс */
    fireEvent.click(checkboxToggle); /*эмулятор переключения чекбокса*/
    expect(screen.getByTestId("todo-value-element")).toHaveClass(
      "crossed"
    ); /*ожидаем что у туду поменялся класс*/
    const deleteTodoBtn = screen.getByTestId("deleteTodo-btn");
    fireEvent.click(deleteTodoBtn); /*жмем кнопку удалить туду*/
    expect(
      screen.queryByTestId("todo-element")
    ).toBeNull(); /*ожидаем что туду удалена*/
    screen.debug();
  });
});
