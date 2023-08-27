
import Favorites from "./components/favorites/favorites";

test('should render favorites list'), () => {
    render(<Favorites></Favorites>)
    const movie = screen.getByTestId('movie-tt0372784')
    expect(movie).toBeInTheDocument()
    expect(movie).toHaveTextContent('Batman')
}