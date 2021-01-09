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
    // TDA: add todo list   

    // TDR : remove todo list

    // TDTL : add todo toggle

    default:
      return state;
  }
}
