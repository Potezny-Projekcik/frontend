export const getArrayOfPriorities = (n) => {
	return Array.from({ length: n }, (_, i) => (i + 1).toString());
};

export const changeProperty = ({ key, value, movieToAdd, setMovieToAdd }) => {
	movieToAdd[key] = value;
	const movieToSet = movieToAdd;
	setMovieToAdd(movieToSet);
};

export const findCategoryName = (categories, idToFind) => {
	const foundCategory = categories.find(({ id }) => id === idToFind);
	return foundCategory.name;
};
