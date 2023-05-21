export const getArrayOfPriorities = (n) => {
	return Array.from({ length: n }, (_, i) => (i + 1).toString());
};

export const changeProperty = ({
	key,
	property,
	movieToAdd,
	setMovieToAdd,
}) => {
	movieToAdd[key] = property;
	const movieToSet = movieToAdd;
	setMovieToAdd(movieToSet);
};
