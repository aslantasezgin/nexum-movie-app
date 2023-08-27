import { Calendar, Calendar2Check, Heart, HeartFill, Star, StarFill } from "react-bootstrap-icons";
import "./movieCard.css"
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../store/FavoritesSlice/FavoritesSlice";
import DateModal from "../dateModal/dateModal";
import { useState } from "react";

const MovieCard = (props) => {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const {favorites} = useSelector((state) => state.favorites)
    const dispatch = useDispatch()
    const item = props.item
    const findFav = favorites.find((fav) => fav.imdbID == item.imdbID)
    

    return(
        <div className="movie-card">
        <div className="movie-img"><img src={props.img}></img> 
        <span className="favorite-icon" onClick={() => {
        if(findFav){
        const newFavoriteList = favorites.filter((favourite) => favourite.imdbID !== item.imdbID)
        dispatch(setFavorites(newFavoriteList))
        }else{
            dispatch(setFavorites([...favorites, item]))
        }

        }}> 
        {
        findFav ? <HeartFill></HeartFill> : <Heart></Heart>
        }
         </span>
        <span className="watch-later" onClick={() => {
            handleShow()
        }}><Calendar2Check></Calendar2Check> Daha Sonra İzle </span>
        </div>    
        <div className="movie-text">
        <h2>{props.title} ({props.year})</h2>   
        <span className="imdb-point"><StarFill></StarFill> 6.8/10   </span>
        <span className="lang"><b> Dil:</b> İngilizce </span>
        <span className="crew"><b>Oyuncular:</b> Jeff Bridges, Garrett Hedlung, Olivia Wilde</span>
        <p className="description">Lorem ipsum dolor sit amet, consectetuer
    adipiscing elit, sed diam nonummy nibh
    euismod tincidunt ut laoreet dolore magna
    aliquam erat volutpat. Ut wisi enim ad…  </p>
        </div>

        <DateModal show={show} item={item} handleClose={handleClose}></DateModal>

        </div>
    )
}

export default MovieCard