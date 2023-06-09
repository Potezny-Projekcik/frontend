import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

const MovieRow = ({ movie }) => {
	const { id, view_date, title, genre, year, production_countries, rating } =
		movie;
	return (
		<TableRow key={id}>
			<TableCell>{view_date}</TableCell>
			<TableCell>{title}</TableCell>
			<TableCell>{genre}</TableCell>
			<TableCell>{year}</TableCell>
			<TableCell>{production_countries}</TableCell>
			<TableCell align="right">{rating}</TableCell>
		</TableRow>
	);
};

MovieRow.propTypes = {
	movie: PropTypes.object,
};

export default MovieRow;
