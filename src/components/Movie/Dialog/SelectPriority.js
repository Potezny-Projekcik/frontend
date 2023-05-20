import React from "react";
import DialogContentTemplate from "./DialogContentTemplate";
import { TextField, MenuItem } from "@mui/material";
import { getArrayOfPriorities } from "./utils";
const SelectPriority = ({ text }) => {
	const priorities = getArrayOfPriorities(5);
	return (
		<DialogContentTemplate text={text}>
			<TextField id="outlined-select-priority" select defaultValue="1">
				{priorities.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</TextField>
		</DialogContentTemplate>
	);
};

export default SelectPriority;
