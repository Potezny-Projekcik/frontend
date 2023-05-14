import { useCallback, useEffect, useState } from "react";
import axios from "axios";
const MOVIE_PAGES_AMOUNT = 3;
const SCROLL_MARGIN = 400;
const API_PAGE_LENGTH = 20;

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
const getMoviesFromApi = async (pagesArray) => {
	const requests = pagesArray.map((page) =>
		axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=8e36936e04ae03c485e9b156d52c6c39&page=${page}`
		)
	);

	const results = await Promise.all(requests);
	const moviesResults = results.flatMap((result) => result.data.results);
	const moviesPromises = getMoviesPromises(moviesResults);
	const moviesFromApi = await Promise.all(moviesPromises);
	return moviesFromApi;
};
export default function useMovies() {
	const [movies, setMovies] = useState([]);
	const [moviesAmount, setMoviesAmount] = useState(MOVIE_PAGES_AMOUNT);

	const fetchMovies = useCallback(async () => {
		try {
			const moviesPages = movies.length / API_PAGE_LENGTH;
			const pagesArray = Array.from(
				{ length: moviesAmount - moviesPages },
				(_, i) => i + movies.length + 1
			);
			const moviesFromApi = await getMoviesFromApi(pagesArray);
			setMovies([...movies, ...moviesFromApi]);
		} catch (err) {
			console.error(err);
		}
	}, [movies, moviesAmount]);

	const handleScroll = useCallback(() => {
		const { scrollY, innerHeight } = window;
		const margin = SCROLL_MARGIN;
		const isScrolledToBottom =
			scrollY + innerHeight + margin >= document.body.offsetHeight;
		if (isScrolledToBottom) {
			setMoviesAmount(moviesAmount + 1);
		}
	}, [moviesAmount]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);
	return { movies };
}
