import React from "react";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { CancelButton, SubmitButton } from "./styles";
import SelectPriority from "./Dialog/SelectPriority";
import SelectDate from "./Dialog/SelectDate";
import SelectCategories from "./Dialog/SelectCategories";

const AddMovieDialog = ({ open, movie, onClose, t }) => {
	const handleClose = () => {
		onClose();
	};

	const addMovie = () => {};
	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>{`${t("addDialog1")} "${movie.title}" ${t(
				"addDialog2"
			)}`}</DialogTitle>
			<SelectPriority text={`${t("priorityDesc")}`} />
			<SelectDate text={`${t("dateDesc")}`} />
			<SelectCategories text={`${t("categoryDesc")}`} />

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
