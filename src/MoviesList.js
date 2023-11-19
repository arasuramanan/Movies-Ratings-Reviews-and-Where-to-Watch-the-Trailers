import { Movie } from './Movie';

export function MoviesList({ moviesList }) {
  return (
    <div className="movie-list-container">
      {moviesList.map((mv, index) => (
        <Movie key={index} movie={mv} id={index} />
      ))}
    </div>
  );

}
