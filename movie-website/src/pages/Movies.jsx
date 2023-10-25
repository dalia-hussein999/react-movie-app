// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';


// function SearchList({ filteredPersons }) {
//   const filtered = filteredMovies.map(movie =>  {
//     <Card sx={{ maxWidth: 345 }} key={movie.id} className="card">
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="140"
//               image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               alt="green iguana"
//               className="image"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div" className="movie-title">
//                 {movie.original_title ? movie.original_title : movie.original_name}
//               </Typography>
//               <Button color="secondary" onClick={() => handleShowDetails(movie.id)}>
//               <Link className="link" to={`/details/${movie.id}`}>
//                   View Details
//                 </Link>
//               </Button>
//             </CardContent>
//           </CardActionArea>
//         </Card>
  
//   return {filtered}
//   )}
  
// }

// export default SearchList;
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; // Import Button from Material-UI
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SearchList({ filteredMovies, handleShowDetails }) { // Pass `filteredMovies` and `handleShowDetails` as props
  return (
    <div className="card-list">
      {filteredMovies.map((movie) => (
        <Card sx={{ maxWidth: 345 }} key={movie.id} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Movie Poster"
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
  );
}

export default SearchList;

