import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ moviesList, setMoviesList }) {

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    setMoviesList([...moviesList, newMovie]);
  };
  return <div className="add-movie-form">

    <TextField label="name" onChange={(event) => setName(event.target.value)} variant="outlined" />
    <TextField label="Rating" onChange={(event) => setRating(event.target.value)} variant="outlined" />
    <TextField label="Poster" onChange={(event) => setPoster(event.target.value)} variant="outlined" />
    <TextField label="Summary" onChange={(event) => setSummary(event.target.value)} variant="outlined" />
    <Button onClick={addMovie} variant="contained">Add Movie</Button>
  </div>;
}
