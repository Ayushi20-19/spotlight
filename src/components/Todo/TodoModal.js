import React, { useReducer, useState, useEffect } from "react";
import { todoReducer } from "../../reducers/todoReducer";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./todomodal.css";

const TodoModal = ({ setTodoModal }) => {
  const initialState = {
    todoItem: localStorage.getItem("TodoList")
      ? JSON.parse(localStorage.getItem("TodoList"))
      : [],
  };
  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");
  const [openInput, setOpenInput] = useState(false);

  const addToTodo = (e) => {
    todoDispatch({
      type: "ADD_TO_TODO",
      payload: e.target.value,
    });
    setInput("");
  };
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoState.todoItem));
  }, [todoState.todoItem]);
  return (
    <div className='todo-wrapper'>
      <div className='todo-heading'>
        <span>Todo</span>
        <span>
          <ExpandLessIcon onClick={() => setTodoModal(false)} />
        </span>
      </div>

      {openInput || todoState.todoItem.length > 0 ? (
        <>
          <input
            className='input todo-input'
            type='text'
            placeholder='New Todo'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && addToTodo(e);
            }}
          />
          <button
            className='todo-del-all-btn'
            onClick={() => todoDispatch({ type: "CLEAR_ALL" })}>
            Done for a day
          </button>
        </>
      ) : null}

      {todoState.todoItem.length > 0 ? (
        <>
          {todoState.todoItem.map((item) => (
            <>
              <div className='input-display-box' key={item.id}>
                <div className='input-text-box'>
                  <input
                    type='checkbox'
                    id={item.todoItem}
                    checked={item.completedTodoValue}
                    onClick={() =>
                      todoDispatch({ type: "COMPLETED_TODO", payload: item.id })
                    }></input>
                  <label
                    htmlFor={item.todoItem}
                    style={{
                      textDecorationLine: item.completedTodoValue
                        ? "line-through"
                        : "none",
                    }}>
                    {item.todoItem}
                  </label>
                </div>
                <CloseIcon
                  onClick={() =>
                    todoDispatch({ type: "DELETE_TODO", payload: item.id })
                  }
                />
              </div>
            </>
          ))}
        </>
      ) : (
        <>
          {openInput ? null : (
            <>
              <h1>todo is empty</h1>
              <AddCircleIcon onClick={() => setOpenInput(true)} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TodoModal;
