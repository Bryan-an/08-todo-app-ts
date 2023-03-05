import { useTodosStore } from '../hooks';
import { Filters } from './Filters';

export const Footer: React.FC = () => {
  const { todos } = useTodosStore();
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> pending tasks
      </span>

      <Filters />
    </footer>
  );
};
