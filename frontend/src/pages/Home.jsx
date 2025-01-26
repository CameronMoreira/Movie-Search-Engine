import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css';
import { searchMovies, getPopularMovies } from "../services/api";


function Home() {

    const [searchQuery, setSearchQuery] = useState(''); // Create a state variable to store the search query
    const [movies, setMovies] = useState([]); // Create a state variable to store the list of movies
    const [error, setError] = useState(null); // Create a state variable to store the error message
    const [loading, setLoading] = useState(true); // Create a state variable to store the loading state. set to true because we want to show a loading spinner when the movies are being fetched

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies(); // Fetch the list of popular movies
                setMovies(popularMovies); // Update the movies state variable with the list of popular movies
            } catch (error) {
                const message = error.message || "Failed to load movies"; // Set a default error message if an error occurs";
                setError(error.message); // Set the error state variable with the error message if an error occurs
            } finally {
                setLoading(false); // Set the loading state to false when the movies are fetched
            }
        }
        loadPopularMovies(); // Call the loadPopularMovies function when the component is mounted
    }, []); // Use the useEffect hook to fetch the list of popular movies when the component is mounted

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior to avoid a page reload and loss of the search query
        if(!searchQuery.trim()) return; // Check if the search query is empty or contains only whitespace characters

        setLoading(true); // Set the loading state to true when the search is initiated
        if (loading) return; // Check if the loading state is true to avoid multiple search requests

        try {
            const searchResults = await searchMovies(searchQuery); // Fetch the list of movies based on the search query
            setMovies(searchResults); // Update the movies state variable with the search results
            setError(null); // Reset the error state variable to null when the search is successful
        } catch (error) {
            console.log(error)
            setError("Failed to search for movies"); // Set the error state variable with an error message if an error occurs
        } finally {
            setLoading(false); // Set the loading state to false when the search is completed
        }
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

            {error && <div className="error-message">{error}</div>} {/* Use a conditional rendering to display the error message if an error occurs */}

            {loading ? ( // Use a ternary operator to conditionally render the loading spinner
                <div className="loading">loading...</div>
            ) : (
            <div className="movies-grid">
                {movies.map((movie) =>  ( 
                    <MovieCard movie={movie} key={movie.id} /> // Pass the movie object as a prop. The key prop is required by React to keep track of the elements in the list.
                ))}
            </div>
            )}
        </div>
    );
}

export default Home;