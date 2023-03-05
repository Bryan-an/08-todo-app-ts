import { Footer, Header, Todos } from './components';

const App: React.FC = () => {
  return (
    <div className="todoapp">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
};

export default App;
