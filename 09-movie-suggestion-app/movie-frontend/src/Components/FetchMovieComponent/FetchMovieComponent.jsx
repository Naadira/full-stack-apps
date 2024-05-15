import axios from 'axios'
import React, { useState } from 'react'
import './FetchMovieComponent.css'
import GenreMovieComponent from './GenreMovieComponent';

const FetchMovieComponent = () => {
  const [genreInfo, setgenreInfo] = useState({
    movieGenre1: '',
    movieGenre2: '',
  });
  const [movieInfo, setMovieInfo] = useState([])
  const inputHandler = (event) => {
    const { name, value } = event.target
    setgenreInfo({
      ...genreInfo, [name]: value
    })
    console.log(genreInfo)
  }

  const {
    movieGenre1,
    movieGenre2 } = genreInfo;

  const formSubmitHandler = async (event) => {
    event.preventDefault()
    axios.post('http://localhost:3500/api/v1/movie/validate', genreInfo)
      .then(response => {
       setMovieInfo(response.data)
        console.log(response.data)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  return (
    <React.Fragment>
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Retrieve movies based on genre</h2>

      <div className='form-group'>
        <label>Movie Genre 1</label>
        <select
         className='drop-down'
          type='text'
          placeholder='Enter the Movie Genre 1'
          value={movieGenre1}
          name="movieGenre1"
          onChange={inputHandler}
          required>
          <option value="">--Select--</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="SciFi">SciFi</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Animation">Animation</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Biography">Biography</option>
        </select>
      </div>

      <div className='form-group'>
        <label>Movie Genre 2</label>
        <select
         className='drop-down'
          type='text'
          placeholder='Enter the Movie Genre 2'
          value={movieGenre2}
          name="movieGenre2"
          onChange={inputHandler}
          required>
          <option value="">--Select--</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="SciFi">SciFi</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Animation">Animation</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Biography">Biography</option>
        </select>
      </div>

      <div>
        <button type='submit'>Get Movies</button>
      </div>

    </form>
    <div className='box'>
     {movieInfo && movieInfo.map((movie,index)=>
     <GenreMovieComponent movie={movie} key={index}/>
    )}
    </div>
    </React.Fragment>
  );

};
export default FetchMovieComponent
