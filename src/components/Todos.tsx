import { Todo as TodoModel } from '../models';
import { Todo } from './Todo';

interface Props {
  todos: TodoModel[];
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
};
