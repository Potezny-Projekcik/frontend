import React, { useContext, useState } from "react";
import DialogContentTemplate from "./DialogContentTemplate";
import { Select, MenuItem } from "@mui/material";
import { getArrayOfPriorities } from "./utils";
import { MovieContext } from "../AddMovieDialog";
import { DEFAULT_PRIORITY, MAX_PRIORITY } from "../constants";
const SelectPriority = ({ text }) => {
	const priorities = getArrayOfPriorities(MAX_PRIORITY);
	const [priority, setPriority] = useState(DEFAULT_PRIORITY);
	const { changePriority } = useContext(MovieContext);
	const handleChange = (e) => {
		e.preventDefault();
		setPriority(e.target.value);
		changePriority(e.target.value);
	};
	return (
		<DialogContentTemplate text={text}>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={priority}
				label="Age"
				onChange={handleChange}
			>
				{priorities.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</DialogContentTemplate>
	);
};

export default SelectPriority;
