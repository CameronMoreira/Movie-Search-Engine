import dotenv from 'dotenv';

const API_KEY = import.meta.env.VITE_API_KEY //import
console.log(import.meta.env.VITE_API_KEY) //log the API_KEY environment variable to the console
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => { //async means that the function will return a promise that will resolve to the value returned by the function
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => { //async means that the function will return a promise that will resolve to the value returned by the function
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`) //encodeURIComponent() function to encode the search query
    const data = await response.json()
    return data.results
};

