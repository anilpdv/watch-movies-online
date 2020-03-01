import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import MovieList from './components/moviesList';
import axios from 'axios';
import {get_movie_list, get_movie} from './helper';

function App() {
  const [movies, setState] = useState([]);
  const searchQuery = async query => {
    const movies = await get_movie_list(query);
    console.log(movies);
    setState(movies);
  };
  return (
    <div className="App">
      <Search searchQuery={searchQuery} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
