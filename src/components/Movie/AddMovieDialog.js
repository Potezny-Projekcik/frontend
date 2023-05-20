import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
const AddMovieDialog = ({ open, movie, onClose, t }) => {
	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>{`${t("addDialog1")} "${movie.title}" ${t(
				"addDialog2"
			)}`}</DialogTitle>
		</Dialog>
	);
};

export default AddMovieDialog;
