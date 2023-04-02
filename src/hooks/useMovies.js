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
				id,
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
export default function useMovies() {
	const [movies, setMovies] = useState([]);
	const fetchMovies = useCallback(async () => {
		try {
			const response = await axios.get(
				"https://api.themoviedb.org/3/movie/popular?api_key=8e36936e04ae03c485e9b156d52c6c39"
			);
			const moviesPromises = getMoviesPromises(response.data.results);
			const moviesFromApi = await Promise.all(moviesPromises);
			setMovies(moviesFromApi);
		} catch (err) {
			console.error(err);
		}
	}, []);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);
	return { movies };
}
