import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
    const { favourites } = useMovieContext(); // Destructure the favourites state variable from the MovieContext

    if (favourites) {
        return (
        <div className="favourites">
            <h2>Your Favourites</h2>
            <div className="movies-grid">
                {favourites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
        );
    }

    return <div className="favourites-empty">
        <h2>Your Favourites List is Empty</h2>
        <p>Go back to the home page and add some movies to your favourites list.</p>
    </div>;

}

export default Favourites;