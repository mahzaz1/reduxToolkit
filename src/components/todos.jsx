import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div className="container">
      {todos.map((todo) => (
        <div className="row">
          <div className="input-group mb-3 ">
            <li
              className="list-group-item list-group-item-primary p-2 rounded-2 col-8"
              key={todo.id}
            >
              {todo.text}
            </li>

            <button
              className="btn btn-danger "
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
