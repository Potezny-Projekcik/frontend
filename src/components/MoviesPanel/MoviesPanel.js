import { Grid } from "@mui/material";
import useMovies from "../../hooks/useMovies";
import Movie from "../Movie/Movie";

function MoviesPanel() {
	const { movies } = useMovies(
		"https://api.themoviedb.org/3/movie/popular?api_key=8e36936e04ae03c485e9b156d52c6c39"
	);
	return (
		<Grid container spacing={{ xs: 4, md: 5 }}>
			{movies.map((movie) => (
				<Grid item xs={12} sm={6} md={4} key={movie.id}>
					<Movie movie={movie} />
				</Grid>
			))}
		</Grid>
	);
}

export default MoviesPanel;
