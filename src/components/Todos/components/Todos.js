import React, { useReducer, useRef, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ThemeContext from '../context/themeContext';
import todoReducer, { initialState } from '../reducer/todoReducer';

export default function Todos() {
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef();
  const [state, dispatch] = useReducer(todoReducer, initialState);


  const completedTodos = state.todos.filter((todo) => {
      return todo.completed;
    });
  
    useEffect(() => {
      document.title = `You have ${completedTodos.length} items completed!`;
    });

  function addTodo(event) {
    event.preventDefault();
    dispatch({
          type: 'ADD_TODO',
          payload: {
            id: uuidv4(),
            title: inputRef.current.value,
            completed: false
          }
        });
        inputRef.current.value = '';
  }

  function toggleComplete(id) {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  }
  function deleteTodo(id) {
    dispatch({ type: 'REMOVE_TODO', payload: { id } });
  }
  const themeClass = theme.background === '#222222' ? 'dark-theme' : 'light-theme';
  return (
    <div className='todo-app'>
      <div>
        <form onSubmit={addTodo}>
          <input className={themeClass} type='text' ref={inputRef} id='add-todo' placeholder='Add Todo...' />
        </form>
      </div>
      <h1>{state.todos.length} Todos</h1>
      <ul className='list-wrapper'>
        {state.todos.map((todo) => (
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
