import React from 'react';
import BlogList from './pages/BlogList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl">My Travel Blog</h1>
      </header>
      <main className="p-6">
        <BlogList />
      </main>
    </div>
  );
}

export default App;
