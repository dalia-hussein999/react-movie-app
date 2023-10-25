import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Search from '../search/Search';
import "./moviesContainer.css"

const Movies = () => {
  const [searchValue,setSearchValue]= useState("");
  const [searchParam] = useState(["title", "name"]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9";

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  const handleShowDetails = (movieId) => {
    console.log(`Clicked on product with ID: ${movieId}`);
  };

  if (loading) {
    return (
      <div>
        Loading...
        <Spinner animation="grow" />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <>
    <Search></Search>
    <div className="movies-container">
      {data.results.map((movie) => (
        <Card sx={{ maxWidth: 345 }} key={movie.id} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="green iguana"
              className="image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className="movie-title">
                {movie.original_title ? movie.original_title : movie.original_name}
              </Typography>
              <Button color="secondary" onClick={() => handleShowDetails(movie.id)}>
              <Link className="link" to={`/details/${movie.id}`}>
                  View Details
                </Link>
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
    </>
    
    
  );
}

export default Movies;
