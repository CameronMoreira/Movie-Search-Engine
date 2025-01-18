import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieCard movie={{title: "Cameron's Film", release_date: "2024",}}/>
    </>
  )
}



export default App
