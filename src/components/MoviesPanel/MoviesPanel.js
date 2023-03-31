import useMovies from "../../hooks/useMovies";
import Movie from "../Movie/Movie";

function MoviesPanel() {
	const { movies } = useMovies("testJSONs/movies.json");
	return (
		<>
			{movies.map((movie) => (
				<Movie movie={movie} />
			))}
		</>
	);
}

export default MoviesPanel;
