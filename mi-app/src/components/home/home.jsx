
import React from 'react';
import moviesJSON from './../../assets/movies.json'; 
import './home.css';
import CardInfo from '../CardInfo/CardInfo';


const Home = () => {
  const movies = moviesJSON.slice(0, 5); 

  const listapeliculas = movies.map((pelicula, index) => {
    return (
      <CardInfo key= {pelicula.id} pelicula= {pelicula}/>
    );
  });
 
  return (
   <div className="home">
  <h2>Películas recientes</h2>
  <div className="movie-list">
    {listapeliculas}
  </div>
</div>

  );
};

export default Home;