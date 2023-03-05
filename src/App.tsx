import { Footer, Todos } from './components';

const App: React.FC = () => {
  return (
    <div className="todoapp">
      <Todos />
      <Footer />
    </div>
  );
};

export default App;
