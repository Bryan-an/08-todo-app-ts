import { createContext } from 'react';
import { TodoFilter } from '../../constants';
import { Todo } from '../../models';

export interface TodosStore {
  todos: Todo[];
  filterSelected: TodoFilter;
  removeTodo: (id: Todo['id']) => void;
  toggleTodo: (id: Todo['id']) => void;
  changeFilter: (filter: TodoFilter) => void;
  removeCompletedTodos: () => void;
  addTodo: (todo: Todo) => void;
}

export const TodosContext = createContext({} as TodosStore);
