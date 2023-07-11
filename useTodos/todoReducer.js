export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[ADD] Todo':
      return [...initialState, action.payload];
    case '[DELETE] Todo':
      return initialState.filter((todo) => todo.id !== action.payload);
    case '[TOGGLE] Todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
