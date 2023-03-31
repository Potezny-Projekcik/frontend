import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useMovies(url) {
	const [movies, setMovies] = useState([]);
	const fetchMovies = useCallback(async () => {
		try {
			const response = await axios.get(url);
			setMovies(response.data.movies);
			console.log(response.data.movies);
		} catch (err) {
			console.error(err);
		}
	}, []);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);
	return { movies };
}
