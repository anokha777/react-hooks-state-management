export const initialState = {
  todos: [
    {
      id: 1,
      title: 'List 1',
      completed: false
    },
    {
      id: 2,
      title: 'List 2',
      completed: false
    },
    {
      id: 3,
      title: 'List 3',
      completed: false
    }
  ]
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(t =>
        t.id === action.payload.id ? { ...t, completed: !t.completed } : t
      );
      return {
        ...state,
        todos: toggledTodos
      };

    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        todos: filteredTodos
      };
    default:
      return state;
  }
}
