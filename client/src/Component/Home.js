import React from "react";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
const Home = () => {
  const [movies, setMovies] = useState();

  //Fetch movie data from NodeApi
  const fetchMovies = async () => {
    //Nodejs apidata
    //const fetchApi = await fetch("http://localhost:5000/movies");
    const fetchApi = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
    const dataJson = await fetchApi.json();
    setMovies(JSON.parse(JSON.stringify(dataJson)))
    console.log(JSON.parse(JSON.stringify(dataJson)))
  };
//Render movie list 
  useEffect(() => { 
    fetchMovies()
  },[])

  return (
    <div>
      <MovieCard data={movies}/>
    </div>
  );
};

export default Home;
