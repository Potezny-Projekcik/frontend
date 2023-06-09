import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useMoviesFromFile = (url) => {
	const [movies, setMovies] = useState([]);
	const fetchMovies = useCallback(async () => {
		try {
			const response = await axios.get(url);
			const dataArr = response.data;
			const moviesFromApi = [];
			for (const data of dataArr) {
				let movie = {};
				movie.id = data[0];
				movie.view_date = data[3];
				movie.title = data[6];
				movie.genre = data[7];
				movie.year = data[9];
				movie.production_companies = data[11];
				movie.languages = data[14];
				movie.production_countries = data[8];
				movie.rating = data[5];
				moviesFromApi.push(movie);
			}

			setMovies(moviesFromApi);
		} catch (err) {
			console.error(err);
		}
	}, [url]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);
	return { movies };
};

export default useMoviesFromFile;
