export default function useMovies(url) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setMovies(response.data.movies);
    } catch (err) {
      console.error(err);
    }
  }, [url]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return { movies };
}
