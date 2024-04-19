import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault()

    dispatch(addTodo(input))
    setInput('')
  };
  return (
    <div className="container">
      <form onSubmit={addTodoHandler}>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="btn btn-primary text-white " type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
