import axios from 'axios'
import React, { useState } from 'react'
import './AddMovieComponent.css'

const AddMovieComponent = () => {
  const [movieInfo, setMovieInfo] = useState({
    movieName: '',
    movieYear: '',
    movieGenre1: '',
    movieGenre2: '',
    imdbRating: ''
  });

  const inputHandler = (event) => {
    const { name, value } = event.target
    setMovieInfo({
      ...movieInfo, [name]: value
    })
    console.log(movieInfo)
  }

  const { movieName,
    movieYear,
    movieGenre1,
    movieGenre2,
    imdbRating } = movieInfo;

  const formSubmitHandler = async (event) => {
    event.preventDefault()
    axios.post('http://localhost:3500/api/v1/movie', movieInfo)
      .then(response => {
        alert(response.data.message)
        window.location.href = '/'
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }


  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new Movie</h2>

      <div className='form-group'>
        <label>Movie Name</label>
        <input
          type='text'
          placeholder='Enter the movie name'
          value={movieName}
          name="movieName"
          onChange={inputHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Movie Year</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the movie year'
          value={movieYear}
          name="movieYear"
          onChange={inputHandler}
          required
        />
      </div>

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

      <div className='form-group'>
        <label>imdbRating</label>
        <input
          type='Number'
          placeholder='Enter the imdb rating'
          value={imdbRating}
          name="imdbRating"
          onChange={inputHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>

    </form>
  );
};
export default AddMovieComponent



















