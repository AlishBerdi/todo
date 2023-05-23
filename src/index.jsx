import React from 'react';
import ReactDOM from 'react-dom/client';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  const todoDate = [
    {label: 'Drink coffee', important: false, id: 1},
    {label: 'Make money', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoDate } />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);