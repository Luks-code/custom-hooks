import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    dispatchTodo({
      type: '[ADD] Todo',
      payload: todo,
    });
  };

  const onDeleteTodo = (id) => {
    dispatchTodo({ type: '[DELETE] Todo', payload: id });
  };

  const onToggleTodo = (id) => {
    dispatchTodo({ type: '[TOGGLE] Todo', payload: id });
  };

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    allTodosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
