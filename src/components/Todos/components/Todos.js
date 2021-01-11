import React, { useReducer, useRef, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ThemeContext from '../context/themeContext';
import todoReducer, { initialState } from '../reducer/todoReducer';

export default function Todos() {
  const { theme } = useContext(ThemeContext);
  // T02 : add reducer and ref

  // T01 : find left todos

  //  EFT: to add effects

  function addTodo(event) {
    event.preventDefault();
    // TDS1 : add todos
  }

  function toggleComplete(id) {
    // TDS2 : toggle todos
  }
  function deleteTodo(id) {
    // TDS3 : remove todos
  }
  const themeClass = theme.background === '#222222' ? 'dark-theme' : 'light-theme';
  return (
    <div className='todo-app'>
      <div>
        <form onSubmit={addTodo}>
          <input className={themeClass} type='text' id='add-todo' placeholder='Add Todo...' />
        </form>
      </div>
      <h1>{initialState.todos.length}</h1>
      <ul className='list-wrapper'>
        {initialState.todos.map((todo) => (
          <li className={`${themeClass} todo-item`} key={todo.id}>
            <span className={todo.completed ? 'todo-complete' : ''} onDoubleClick={() => toggleComplete(todo.id)}>
              {todo.title}
            </span>
            <div className={`${themeClass} todo-delete`} onClick={() => deleteTodo(todo.id)}>
              <span>x</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
