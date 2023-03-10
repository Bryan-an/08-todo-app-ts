import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'todomvc-app-css/index.css';
import './index.css';
import { TodosProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodosProvider>
      <App />
    </TodosProvider>
  </React.StrictMode>
);
