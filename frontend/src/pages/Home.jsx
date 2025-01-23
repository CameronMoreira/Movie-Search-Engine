import MovieCard from "../components/MovieCard";
import { useState } from "react";


function Home() {

    const [searchQuery, setSearchQuery] = useState(''); // Create a state variable to store the search query

    const movies = [
        {id:1, title: "The Shawshank Redemption", release_date: "1994"},
        {id:2, title: "Terminator", release_date: "1999"},
        {id:3, title: "IT", release_date: "2017"},
        {id:4, title: "The Thing", release_date: "1995"}
    ];

    const handleSearch = () => {
        e.preventDefault(); // Prevent the default form submission behavior to avoid a page reload and loss of the search query
        alert(searchQuery)
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value={searchQuery} // Bind the value of the input field to the searchQuery state variable
                    onChange={(e) => setSearchQuery(e.target.value)} // Update the searchQuery state variable when the input field value changes
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) =>  
                    movie.title.toLowerCase().startsWith(searchQuery) && ( <MovieCard movie={movie} key={movie.id} /> // Pass the movie object as a prop. The key prop is required by React to keep track of the elements in the list.
                ))}
            </div>
        </div>
    );
}

export default Home;