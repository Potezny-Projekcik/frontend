import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function getMoviesPromises(movies) {
	return movies.map(async ({ title, release_date, id }) => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=8e36936e04ae03c485e9b156d52c6c39`
			);
			const {
				genres,
				production_companies,
				spoken_languages,
				production_countries,
			} = res.data;
			return {
				title,
				release_date,
				genres,
				production_companies,
				spoken_languages,
				production_countries,
			};
		} catch (err) {
			console.error(err);
		}
	});
}
export default function useMovies(url) {
	const [movies, setMovies] = useState([]);
	const fetchMovies = useCallback(async () => {
		try {
			const response = await axios.get(url);
			const moviesPromises = getMoviesPromises(response.data.results);
			const allMovies = await Promise.all(moviesPromises);
			setMovies(allMovies);
		} catch (err) {
			console.error(err);
		}
	}, [url]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);
	return { movies };
}
