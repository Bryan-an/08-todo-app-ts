import { useState } from 'react';
import { Todos } from './components';
import { useTodosStore } from './hooks';
import { mockTodos } from './mocks';
import { Todo } from './models';

const App: React.FC = () => {
  const { todos } = useTodosStore();

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  );
};

export default App;
