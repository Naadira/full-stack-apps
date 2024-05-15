import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieComponent from './MovieComponent'
import './GetMovieComponent.css'
const GetAllMovieComponent = () => {
    const [movie, setmovie] = useState([])

    useEffect(()=>{
       axios.get('http://localhost:3500/api/v1/movie')
         .then(response => setmovie(response.data))
         .catch(error => console.log(error.response.data.message))
     },[])
     return (
       <React.Fragment>
         <div className='books'>
           {movie && movie.map((movie, index) => (
               <MovieComponent movie={movie} key={index}/>
           ))}
         </div>
       </React.Fragment>
     )
}

export default GetAllMovieComponent