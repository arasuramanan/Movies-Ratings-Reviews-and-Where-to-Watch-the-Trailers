import { useState } from 'react';
import './App.css';

function App() {


  const moviesList = [
    {
    "id": "99",
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 8.4,
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
    "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
    },
    {
    "id": "100",
    "name": "Master",
    "poster": "https://m.media-amazon.com/images/M/MV5BZDg2NGEyNDItNzY2My00ZjcxLWI5NGYtN2ZkOWRkMmFiOGI3XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
    "rating": 8.8,
    "summary": "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
    "trailer": "https://www.youtube.com/watch?v=1_iUFT3nWHk"
    },
    {
    "id": "101",
    "name": "Oh Kadhal Kanmani",
    "poster": "https://m.media-amazon.com/images/M/MV5BYWY4NGM5N2MtODk2OC00Y2VjLWI0YWItMTc4MmIyMWY2OTJiXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 7.9,
    "summary": "Two young lovers are compatible in every way - they even agree that marriage is futile. However, their emotions are not so easily managed, especially when they witness the unconditional love of the older couple with whom they live.",
    "trailer": "https://www.youtube.com/watch?v=2mBG4vlhcCc"
    },
    {
    "id": "103",
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    "id": "102",
    "name": "Soorarai Pottru",
    "poster": "https://m.media-amazon.com/images/M/MV5BOTc2ZTlmYmItMDBhYS00YmMzLWI4ZjAtMTI5YTBjOTFiMGEwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UY693_.jpg",
    "rating": 8.5,
    "summary": "Nedumaaran Rajangam Maara sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
    "trailer": "https://www.youtube.com/watch?v=fa_DIwRsa9o"
    },
    {
    "id": "104",
    "name": "Achcham Yenbadhu Madamaiyada",
    "rating": 8.2,
    "summary": "A youngster embarks on a road trip with the love of his life until an accident causes things to get out of control.",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjhhNjE3ODktZWNlZS00OWNkLTkzOTMtNmQ2Mjk5OGFjZWFkXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "trailer": "https://www.youtube.com/watch?v=CbwdguipReI"
    },
    {
    "id": "105",
    "name": "96",
    "poster": "https://m.media-amazon.com/images/M/MV5BYTBmMDQ0ZmYtYWU5Zi00ZmY3LTkyZTItOWFiY2I3YzdkYzgxXkEyXkFqcGdeQXVyODE5NjYxMzQ@._V1_.jpg",
    "rating": 8.6,
    "summary": "Two high school sweethearts meet at a reunion after 22 years and reminisce about their past.",
    "trailer": "https://www.youtube.com/watch?v=r0synl-lI4I"
    },
    {
    "id": "106",
    "name": "Chekka Chivantha Vaanam",
    "poster": "https://m.media-amazon.com/images/M/MV5BNDFmNmU1MjctMGIwNy00NTcyLWFhOTMtM2JhMTBkNWU2OGU1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_FMjpg_UY1497_.jpg",
    "rating": 8.3,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/watch?v=x2q5w-ThJeE"
    },
    {
    "id": "107",
    "name": "Lagaan: Once Upon a Time in India",
    "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "rating": 8.7,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/watch?v=Nhi4Azs2nEw"
    },
    {
    "name": "PS2",
    "poster": "https://m.media-amazon.com/images/M/MV5BNmQ3NGM5ODMtNDhjYS00MDQwLWEwNjItNjZiNjdkMmQ3NjQzXkEyXkFqcGdeQXVyMTY0MDk0NjE3._V1_.jpg",
    "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
    "rating": 8.9,
    "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
    "id": "108"
    },
    {
    "name": "Taare Zameen Par",
    "poster": "https://m.media-amazon.com/images/M/MV5BYjY0MGU3MmQtMGVhOS00M2IyLWI1MTktZGUxMzBjMTE5ZDA3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1038_.jpg",
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/watch?v=F-PAI2HnQUo",
    "id": "109"
    }
    ]
  
  return (
    <div className="App">
       <div className="movie-list-container">
        {moviesList.map((mv)=> (
        <Movie movie={mv} /> 
          ))}
          </div> 
       
      </div>
 
  );
}

function Counter(){

  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);

  return (
  <div>
 <button onClick={()=> setLike(like + 1)}>👍 {like} </button>
 <button onClick={()=> setdisLike(dislike + 1)}>👎 {dislike} </button>
  
  </div>
  );
}

function Movie({ movie }) {
  return (
<div className='movie-container'>
  <img src={movie.poster} alt={movie.name} className='movie-poster' />
  <div className='movie-specs'>
  <h2 className='movie-name'>{movie.name}</h2>
  <p className='movie-rating'>⭐{movie.rating}</p>
  </div>
  <p className='movie-summary'>{movie.summary}</p>
  <Counter/>
  </div>
  )
}

export default App;
