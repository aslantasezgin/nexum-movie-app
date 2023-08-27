import Search from "../components/search/search";
import MovieList from "../components/movieList/movieList";
import SearchContext from "../context/SearchValue";
import { useContext } from "react";

const HomeView = () => {
  const {searchValue} = useContext(SearchContext)


    return(
        <div className="main-area">
        <Search></Search>
        {searchValue.length > 0 ? 
        <MovieList></MovieList> : ""
      }
        
        </div>
    )
}

export default HomeView 