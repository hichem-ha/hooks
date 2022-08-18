// import "./App.css";
import React , {useState} from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import {data} from './data/data';
import Addmovie from "./components/Addmovie";
 
 const App = () => {
  const [movies, setMovies] = useState(data);
  const [title , setTitle] =useState("")
  const [searchRate , setSearchRate] =useState(0)


  
   return (
     <div >
    <Filter setTitle={setTitle} setSearchRate={setSearchRate}/>
      <MovieList movies={movies} title={title} searchRate={searchRate} />
      <Addmovie setMovies={setMovies} movies={movies}/>
     
     </div>
   )
 }
 
 export default App
