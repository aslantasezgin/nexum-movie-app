import { useContext, useEffect, useState } from "react";
import MovieCard from "../movieCard/movieCard";
import "./movieList.css"
import SearchContext from "../../context/SearchValue";
import Loader from "../../assets/loader";
import MovieContext from "../../context/movieListContext";
import { useNavigate } from "react-router-dom";


const MovieList = () => {
    const {searchValue} = useContext(SearchContext)
    const {movies, setMovies} = useContext(MovieContext)
    const navigate = useNavigate()
    
    
    const getMovieList = async () => {

        const URL = `https://www.omdbapi.com/?apikey=8a1a8017&s=${searchValue}`
        const response = await fetch(URL)
        const responseJSON = await response.json()

        if(responseJSON.Search){
            setMovies(responseJSON.Search)
        }

    }

    useEffect(() => {
     getMovieList()
    }, [searchValue])



    return(
    <div className="movie-list">

    { movies.slice(0, 2).map((item) => {
         return ( <MovieCard item={item} key={item.imdbID} title={item.Title} img={item.Poster} year={item.Year}></MovieCard>)
     }) }
    

    <button style={{width:"100%", marginTop:"25px"}} onClick={() => {
        navigate("/movies")
    }} className="btn btn-danger">Daha Fazla Sonuç Listele</button>

    </div>
    )
}

export default MovieList