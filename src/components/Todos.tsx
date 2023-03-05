import { TODO_FILTERS } from '../constants';
import { useTodosStore } from '../hooks';
import { Todo } from './Todo';

export const Todos: React.FC = () => {
  const { todos, filterSelected } = useTodosStore();

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
};
