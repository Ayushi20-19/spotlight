import { v4 as uuidv4 } from "uuid";

const completedTodo = (todoState, id) => {
  const value = todoState.todoItem.reduce(
    (acc, curr) =>
      curr.id === id
        ? [...acc, { ...curr, completedTodoValue: !curr.completedTodoValue }]
        : [...acc, curr],
    []
  );
  return { ...todoState, todoItem: value };
};
const deleteTodoItem = (todoState, id) => {
  const value = todoState.todoItem.filter((item) => item.id !== id);
  return { ...todoState, todoItem: value };
};

const todoReducer = (todoState, { type, payload }) => {
  console.log(todoState, type, payload);
  switch (type) {
    case "ADD_TO_TODO":
      return {
        ...todoState,
        todoItem: [
          ...todoState.todoItem,
          {
            id: uuidv4(),
            todoItem: payload,
            completedTodoValue: false,
          },
        ],
      };

    case "COMPLETED_TODO":
      return completedTodo(todoState, payload);
    case "DELETE_TODO":
      return deleteTodoItem(todoState, payload);
    case "CLEAR_ALL":
      return { ...todoState, todoItem: [] };
    default:
      return todoState;
  }
};
export { todoReducer };
