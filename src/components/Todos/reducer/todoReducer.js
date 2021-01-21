import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: 'List 1',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'List 2',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'List 3',
      completed: false,
    },
  ],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
          return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
          const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
          return {
            ...state,
            todos: filteredTodos
          };
  
    case 'TOGGLE_TODO':
          const toggledTodos = state.todos.map((t) => (t.id === action.payload.id ? { ...t, completed: !t.completed } : t));
          return {
            ...state,
            todos: toggledTodos,
          };
    default:
      return state;
  }
}
