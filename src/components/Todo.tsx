import { useTodosStore } from '../hooks';
import { Todo as TodoModel } from '../models';

type Props = TodoModel;

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  const { removeTodo, toggleTodo } = useTodosStore();

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => toggleTodo(id)}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => removeTodo(id)}></button>
    </div>
  );
};
