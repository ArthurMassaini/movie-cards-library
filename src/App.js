import React from 'react';
import './App.css';
import data from './data';
import Header from './components/Header';
import MoviesList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList movies={data} />
    </div>
  );
}

export default App;
