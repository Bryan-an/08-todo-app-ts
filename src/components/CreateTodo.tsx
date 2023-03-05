import { useState } from 'react';
import { useTodosStore } from '../hooks';
import { Todo } from '../models';

export const CreateTodo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { addTodo } = useTodosStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo({ title: inputValue } as Todo);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What you want to do?"
        autoFocus
      />
    </form>
  );
};
