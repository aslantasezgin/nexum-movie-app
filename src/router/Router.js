import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView"
import MoviesView from "../views/MoviesView"
import FavoritesView from "../views/FavoritesView"



const Router = () => {
    const routes = useRoutes([
    {
    path:'/',
    element:<HomeView></HomeView>
    },
    {
    path:'/movies',
    element:<MoviesView></MoviesView>
    },
    {
    path:'/favorites',
    element:<FavoritesView></FavoritesView>
    },

    ])

    return routes
}

export default Router