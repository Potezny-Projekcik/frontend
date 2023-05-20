import React, { useState } from "react";
import {
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
	TextField,
	MenuItem,
	Select,
	Box,
	Chip,
	OutlinedInput,
} from "@mui/material";
import { CancelButton, SubmitButton } from "./styles";
import { getArrayOfPriorities } from "./utils";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const categories = [
	"Do piwka",
	"Samemu",
	"Na zły humor",
	"Z dziewczyną",
	"Z kumplami",
];
const AddMovieDialog = ({ open, movie, onClose, t }) => {
	const handleClose = () => {
		onClose();
	};
	const [category, setCategory] = useState([]);
	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setCategory(typeof value === "string" ? value.split(",") : value);
	};
	const addMovie = () => {};
	const priorities = getArrayOfPriorities(5);
	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>{`${t("addDialog1")} "${movie.title}" ${t(
				"addDialog2"
			)}`}</DialogTitle>
			<DialogContent>
				<DialogContentText>{`${t("priorityDesc")}`}</DialogContentText>
				<TextField id="outlined-select-priority" select defaultValue="1">
					{priorities.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</DialogContent>
			<DialogContent>
				<DialogContentText>{`${t("dateDesc")}`}</DialogContentText>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker />
				</LocalizationProvider>
			</DialogContent>
			<DialogContent>
				<DialogContentText>{`${t("categoryDesc")}`}</DialogContentText>
				<Select
					id="select-category"
					multiple
					value={category}
					onChange={handleChange}
					input={<OutlinedInput id="select-multiple" />}
					renderValue={(selected) => (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							{selected.map((value) => (
								<Chip key={value} label={value} />
							))}
						</Box>
					)}
				>
					{categories.map((categoryItem) => (
						<MenuItem key={categoryItem} value={categoryItem}>
							{categoryItem}
						</MenuItem>
					))}
				</Select>
			</DialogContent>

			<DialogActions>
				<CancelButton variant="contained" onClick={handleClose}>{`${t(
					"cancelBtn"
				)}`}</CancelButton>
				<SubmitButton variant="contained" onClick={addMovie}>{`${t(
					"submitBtn"
				)}`}</SubmitButton>
			</DialogActions>
		</Dialog>
	);
};

export default AddMovieDialog;
