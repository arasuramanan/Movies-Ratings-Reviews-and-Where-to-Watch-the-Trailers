import { useState } from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { AddColor } from './AddColor';
import { AddMovie } from './AddMovie';
import { MoviesList } from './MoviesList';
import { NotFound } from './NotFound';
import { Home } from './Home';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function App() {

  const [moviesList, setMoviesList] = useState(INITIAL_MOVIE_LIST);
  const navigate = useNavigate();

  return (
    <div className="App">
  {/* <ul>
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/">Movies</Link></li>
  <li><Link to="/movies/add">Add Movies</Link></li>
  <li><Link to="/color-game">Color game</Link></li>
  </ul> */}

  <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/movies')}>Movies</Button>
          <Button color="inherit" onClick={() => navigate('/movies/add')}>Add Movies</Button>
          <Button color="inherit" onClick={() => navigate('/color-game')}>Color game</Button>
        </Toolbar>
      </AppBar>
    
     <section className="router-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesList moviesList={moviesList}  />} /> 
          <Route path="/movies/add" element={<AddMovie moviesList={moviesList} setMoviesList={setMoviesList} />} />
          <Route path="/movies/:id" element={<MovieDetails moviesList={moviesList} />} />
          <Route path="/color-game" element={<AddColor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      </div>
  );
}

function MovieDetails({ moviesList }) {
  const { id } = useParams(); 
  const movie = moviesList[id];
  console.log(moviesList, movie);

  const Styles = {
    color: movie.rating >= 8.4 ? "green" : "red",
  };

  const navigate = useNavigate();

   return (
   <div>
     <iframe width="100%" height="700" src={movie.trailer} title="VIKRAM - Official Trailer | Kamal Haasan | VijaySethupathi, FahadhFaasil | LokeshKanagaraj | Anirudh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <div className='movie-details-container'>
       <div className='movie-specs'>
       <h2 className='movie-name'>{movie.name}</h2>
       <p style={Styles} className='movie-rating'>⭐{movie.rating}</p>
       </div>
       <p className='movie-summary'>{movie.summary}</p> 
       <Button startIcon={<KeyboardBackspaceIcon/>} variant="contained" onClick={() => navigate(-1)}>Back</Button>
       </div>
    </div>
    );
}

export default App;
