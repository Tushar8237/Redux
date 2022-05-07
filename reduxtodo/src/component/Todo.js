import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import "./todo.css";

const Todo = () => {

    const [inputData, setInputData] = useState ('');
    const dispatch = useDispatch();
  return (
    <div>
       <div className='main-div'>
      <div className='child-div'>
        <figure>
        <figcaption>Add Your List Here ✌️ </figcaption>
        </figure>

        <div className='addItem'>
          <input type="text" placeholder=' ✍️ Add Items.. '
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          />
          <i className='fa fa-plus add-btn' onClick={() =>dispatch(addTodo(inputData))} ></i>
        </div>
      </div>
     
    </div>
    </div>
  )
}

export default Todo
