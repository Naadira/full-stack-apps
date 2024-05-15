import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllMovieComponent from './Components/GetMovieComponent/GetAllMovieComponent';
import AddMovieComponent from './Components/AddMovieComponent/AddMovieComponent';
import FetchMovieComponent from './Components/FetchMovieComponent/FetchMovieComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Movie Suggestion App</h1>
              
            <nav className="nav-menu">
                <Link to="/" className="gray-bg">HOME</Link>
                <Link to="/admin/add" className="gray-bg">ADD MOVIE</Link>
                <Link to="/admin/edit" className="gray-bg" >GET MOVIES</Link>
                {/* <Link to="/admin/delete" className="gray-bg" >Delete Books</Link> */}
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllMovieComponent/>}></Route>
                 <Route path='/admin/add' element={<AddMovieComponent/>}></Route>
                 <Route path='/admin/edit' element={<FetchMovieComponent/>}></Route>
                 {/* <Route path='/admin/delete' element={<DeleteBooksComponent/>}></Route> */}
          </Routes>
          </div>
       </Router>
  );
}

export default App;
