import { createContext } from 'react';
import { Todo } from '../../models';

export interface TodosStore {
  todos: Todo[];
  removeTodo: (id: Todo['id']) => void;
}

export const TodosContext = createContext({} as TodosStore);
