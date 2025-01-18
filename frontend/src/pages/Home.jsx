import MovieCard from "../components/MovieCard";


function Home() {
    const movies = [
        {id:1, title: "The Shawshank Redemption", release_date: "1994"},
        {id:2, title: "Terminator", release_date: "1999"},
        {id:3, title: "IT", release_date: "2017"},
        {id:4, title: "The Thing", release_date: "1995"},
    ];
    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => ( 
                    <MovieCard movie={movie} key={movie.id} /> // Pass the movie object as a prop. The key prop is required by React to keep track of the elements in the list.
                ))}
            </div>
        </div>
    );
}