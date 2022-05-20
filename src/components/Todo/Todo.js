import React, { useState } from "react";
import TodoModal from "./TodoModal";

const Todo = () => {
  const [isTodoModal, setTodoModal] = useState(false);
  return (
    <div className='todo-position'>
      {isTodoModal ? (
        <div className='bottom-right-up'>
          <TodoModal setTodoModal={setTodoModal} />
        </div>
      ) : null}
      <span
        className='bottom-right'
        onMouseEnter={() => setTodoModal(!isTodoModal)}
        onClick={() => setTodoModal(!isTodoModal)}>
        Todo
      </span>
    </div>
  );
};

export default Todo;
