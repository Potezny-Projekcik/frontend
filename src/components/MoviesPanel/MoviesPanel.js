import { Grid } from "@mui/material";
import useMovies from "../../hooks/useMovies";
import Movie from "../Movie/Movie";
import { useState, useEffect } from "react";

function MoviesPanel() {
	const { movies } = useMovies();
	const [isBottom, setIsBottom] = useState(false);

	const handleScroll = () => {
		const { scrollY, innerHeight } = window;
		const margin = 200;
		const isScrolledToBottom =
			scrollY + innerHeight + margin >= document.body.offsetHeight;
		if (isScrolledToBottom) {
			setIsBottom(true);
			yourFunction();
		} else {
			setIsBottom(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const yourFunction = () => {
		console.log("Użytkownik zjechał scrollem na sam dół strony");
	};
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
