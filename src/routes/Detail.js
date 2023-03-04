import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <img src={movie.medium_cover_image} />
      <div>
        <h2>{movie.title}</h2>
        <h3>{movie.year}</h3>
        <p>{movie.description_full}</p>
        <ul>{movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}</ul>
      </div>
    </div>
  );
}
export default Detail;
