import { useContext, useEffect, useState } from "react"
import SearchContext from "../../context/SearchValue"
import MovieContext from "../../context/movieListContext"
import MovieCard from "../movieCard/movieCard"
import "./movies.css"


const Movies = () => {

    const {searchValue} = useContext(SearchContext)
    const [movies, setMovies] = useState([])
    const resultCount = movies.length
    const[page, setPage] = useState(1)

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          setPage(page + 1);
        }
      };
    
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const getMovieList = async () => {

        const URL = `https://www.omdbapi.com/?apikey=8a1a8017&s=${searchValue}&page=${page}`
        const response = await fetch(URL)
        const responseJSON = await response.json()
        const newData = responseJSON.Search;
      
        if(responseJSON.Search){
            setMovies(prevData => [...movies, ...newData]);

        }

    }

    useEffect(() => {
        getMovieList()
    }, [page])

    return(
     <div className="movies">
    <div className="movies-title">
    <h1>{searchValue} İçin Sonuçlar </h1>
    <span>{resultCount} Sonuç Bulundu</span>
    </div>

    <div className="moviesList">
    {movies.map((item) => {
    return ( <MovieCard item={item} key={item.imdbID} title={item.Title} img={item.Poster} year={item.Year}></MovieCard>)
    })}

</div>
  
     
     </div>   
    )
}

export default Movies