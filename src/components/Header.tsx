import { CreateTodo } from './CreateTodo';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>
        todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
        />
      </h1>

      <CreateTodo />
    </header>
  );
};
