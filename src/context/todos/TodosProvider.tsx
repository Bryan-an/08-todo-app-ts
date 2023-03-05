import { useState } from 'react';
import { TodoFilter, TODO_FILTERS } from '../../constants';
import { mockTodos } from '../../mocks';
import { Todo } from '../../models';
import { TodosContext, TodosStore } from './TodosContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [filterSelected, setFilterSelected] = useState<TodoFilter>(
    TODO_FILTERS.ALL
  );

  const removeTodo: TodosStore['removeTodo'] = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo: TodosStore['toggleTodo'] = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const changeFilter: TodosStore['changeFilter'] = (filter) =>
    setFilterSelected(filter);

  const removeCompletedTodos: TodosStore['removeCompletedTodos'] = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const addTodo: TodosStore['addTodo'] = (todo) => {
    todo.id = crypto.randomUUID();
    todo.completed = false;

    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const store: TodosStore = {
    todos,
    filterSelected,
    removeTodo,
    toggleTodo,
    changeFilter,
    removeCompletedTodos,
    addTodo
  };

  return (
    <TodosContext.Provider value={store}>{children}</TodosContext.Provider>
  );
};
