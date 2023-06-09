import React, { useState, useContext } from "react";
import DialogContentTemplate from "./DialogContentTemplate";
import { Select, OutlinedInput, Box, Chip, MenuItem } from "@mui/material";
import { MovieContext } from "../AddMovieDialog";
import PropTypes from "prop-types";
import { findCategoryName } from "./utils";
import useCategoriesFromFile from "../../../hooks/useCategoriesFromFile";

const SelectCategories = ({ text }) => {
	const [category, setCategory] = useState([]);
	const { changeCategories } = useContext(MovieContext);
	const { categories } = useCategoriesFromFile(
		"http://127.0.0.1:8000/api/category/"
	);
	console.log(categories);
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		changeCategories(value);
		setCategory(typeof value === "string" ? value.split(",") : value);
	};
	return (
		<DialogContentTemplate text={text}>
			<Select
				id="select-category"
				multiple
				value={category}
				onChange={handleChange}
				input={<OutlinedInput id="select-multiple" />}
				renderValue={(selected) => (
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
						{selected.map((value) => (
							<Chip key={value} label={findCategoryName(categories, value)} />
						))}
					</Box>
				)}
			>
				{categories.map(({ categoryid, categoryname }) => (
					<MenuItem key={categoryid} value={categoryid}>
						{categoryname}
					</MenuItem>
				))}
			</Select>
		</DialogContentTemplate>
	);
};

SelectCategories.propTypes = {
	text: PropTypes.string.isRequired,
};

export default SelectCategories;
