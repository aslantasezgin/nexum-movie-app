

import { useState } from "react";
import { createContext } from "react";


const MovieContext = createContext({});

export const MovieProvider = ({children}) => {

    const [movies, setMovies] = useState([])

    return(
        <MovieContext.Provider value={{movies, setMovies}}>
        {children}
        </MovieContext.Provider>
    )

}

export default MovieContext