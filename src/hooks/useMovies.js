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
	const [isBottom, setIsBottom] = useState(false);
	// const [moviesAmount, setMoviesAmount] = useState(MOVIE_PAGES_AMOUNT);
	let moviesAmount = MOVIE_PAGES_AMOUNT;

	const fetchMovies = useCallback(async () => {
		try {
			const pagesArray = Array.from(
				{ length: moviesAmount - movies.length },
				(_, i) => i + movies.length + 1
			);
			console.log(pagesArray);
			const moviesFromApi = await getMoviesFromApi(pagesArray);
			setMovies(moviesFromApi);
		} catch (err) {
			console.error(err);
		}
	}, []);
	const handleScroll = useCallback(() => {
		const { scrollY, innerHeight } = window;
		const margin = 200;
		const isScrolledToBottom =
			scrollY + innerHeight + margin >= document.body.offsetHeight;
		if (isScrolledToBottom && !isBottom) {
			setIsBottom(true);
			// setMoviesAmount(moviesAmount + 1);
			moviesAmount++;
			fetchMovies();
		} else {
			setIsBottom(false);
		}
	}, []);
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
