import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActions } from '@mui/material';
import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export function Counter() {

  const [like, SetLike] = useState(0);
  const [dislike, SetDisLike] = useState(0);
  const incrementLike = () => SetLike(like + 1);
  const incrementDisLike = () => SetDisLike(dislike + 1);

  return (
    <div className="counter-container">
      <IconButton color="primary" onClick={incrementLike} aria-label="Toggle Summary"><Badge badgeContent={like} color="primary">👍</Badge></IconButton>
      <IconButton color="primary" onClick={incrementDisLike} aria-label="Toggle Summary"><Badge badgeContent={dislike} color="error">👎</Badge></IconButton>
    </div>
  );
}

export function Movie({ movie, id }) {
  const [show, setShow] = useState(true);
  console.log(movie);

  const Styles = {
    color: movie.rating >= 8.4 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <Card className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <CardContent>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}
          <IconButton color="primary" onClick={() => setShow(!show)} aria-label="Toggle Summary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton onClick={() => navigate(`/movies/${id}`)} color="primary" aria-label="Movie details">
          <InfoIcon />
          </IconButton></h2>
         
          <p style={Styles} className='movie-rating'>⭐{movie.rating}</p>
        </div>

        {/* Conditional rendering */}
        {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}
