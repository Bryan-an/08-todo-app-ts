import { useState } from 'react';
import { mockTodos } from '../../mocks';
import { TodosContext, TodosStore } from './TodosContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState(mockTodos);

  const removeTodo: TodosStore['removeTodo'] = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const store: TodosStore = {
    todos,
    removeTodo
  };

  return (
    <TodosContext.Provider value={store}>{children}</TodosContext.Provider>
  );
};
