import { Alert } from "react-bootstrap"
import MovieCard from "../movieCard/movieCard"
import "./favorites.css"
import { useSelector } from "react-redux"


const Favorites = () => {

    const {favorites} = useSelector((state) => state.favorites)
    const resultCount = favorites.length

    return(
     <div className="movies">
    <div className="movies-title">
    <h1>Favorilerim</h1>
    <span>{resultCount} Sonuç Bulundu</span>
    </div>

    {favorites.length < 1 ? <Alert key={"danger"} variant={"danger"}>Favorilere eklenmiş kayıt bulunamadı.</Alert> :
    
    <div className="moviesList">
    {favorites.map((item) => {
    return ( <MovieCard data-testid={`movie-${item.imdbID}`} item={item} key={item.imdbID} title={item.Title} img={item.Poster} year={item.Year}></MovieCard>)
    })}</div>
    }




  
     
     </div>   
    )
}

export default Favorites