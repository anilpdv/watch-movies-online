import React from 'react';
import Movie from './Movie';
import axios from 'axios';

export default function MoviesList(props) {
  function open(url) {
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
  }

  const get_movie = async id => {
    const res = await axios.get(
      `https://quotesappapi.herokuapp.com/movie/${id}`,
    );
    if (res.data) {
      return res.data.url;
    }
    return null;
  };

  const getmovie = async id => {
    const url = await get_movie(id);
    if (url) {
      open(url);
    } else {
      alert('sorry error occured');
    }
  };

  const getmovies = () =>
    props.movies.map(m => (
      <Movie key={m.imdbID} getmovie={getmovie} movie={m} />
    ));
  return <div>{getmovies()}</div>;
}
