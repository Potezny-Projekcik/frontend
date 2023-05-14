import { Grid } from "@mui/material";
import useMovies from "../../hooks/useMovies";
import Movie from "../Movie/Movie";

function MoviesPanel() {
	const { movies } = useMovies();

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
