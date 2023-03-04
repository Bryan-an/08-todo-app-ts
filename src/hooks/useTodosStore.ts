import { useContext } from 'react';
import { TodosContext } from '../context';

export const useTodosStore = () => useContext(TodosContext);
