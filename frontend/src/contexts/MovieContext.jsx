import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext(); // Create a context object

export const useMovieContext = () => useContext(MovieContext); // Create a custom hook to access the MovieContext

export const MovieProvider = ({children}) => { // Provide state to any of the components that are wrapped around it

    const [favourites, setFavourites] = useState([]); // Create a state variable to store the list of favourite movies

    useEffect(() => {
        const storedFavourites = localStorage.getItem('favourites'); // Retrieve the list of favourite movies from local storage
        if (storedFavourites) { // Check if the stored favourites exist
            setFavourites(JSON.parse(storedFavourites)); // Update the favourites state variable with the stored favourites
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites)); // Store the list of favourite movies in local storage
    }, [favourites])

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie]); // Add a movie to the list of favourites
        console.log("Adding to favourites", movie);
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId)); // Remove a movie from the list of favourites
        console.log("Removing from favourites", movieId);
    }

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.id === movieId); // Check if a movie is in the list of favourites based on the movie ID
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
};