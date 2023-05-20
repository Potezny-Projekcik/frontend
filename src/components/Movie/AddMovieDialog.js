import React from "react";
import {
	Dialog,
	DialogTitle,
	DialogActions,
	DialogContent,
	DialogContentText,
	TextField,
	MenuItem,
} from "@mui/material";
import { CancelButton, SubmitButton } from "./styles";
import { getArrayOfPriorities } from "./utils";
const AddMovieDialog = ({ open, movie, onClose, t }) => {
	const handleClose = () => {
		onClose();
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
				<TextField id="outlined-select-currency" select defaultValue="1">
					{priorities.map((option, index) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
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
