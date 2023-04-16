import { useCallback, useEffect, useState } from "react";
import axios from "axios";
const MOVIE_PAGES_AMOUNT = 3;

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
			const pagesArray = Array.from(
				{ length: MOVIE_PAGES_AMOUNT },
				(_, i) => i + 1
			);
			const requests = pagesArray.map((page) =>
				axios.get(
					`https://api.themoviedb.org/3/movie/popular?api_key=8e36936e04ae03c485e9b156d52c6c39&page=${page}`
				)
			);

			const results = await Promise.all(requests);
			const moviesResults = results.flatMap((result) => result.data.results);
			const moviesPromises = getMoviesPromises(moviesResults);
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
