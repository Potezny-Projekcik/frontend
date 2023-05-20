export const getArrayOfPriorities = (n) => {
	return Array.from({ length: n }, (_, i) => (i + 1).toString());
};
