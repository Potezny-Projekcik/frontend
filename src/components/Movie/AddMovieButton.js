import { Button } from "@mui/material";
import React from "react";
import AddMovieDialog from "./AddMovieDialog";
import { useTranslation } from "react-i18next";

const AddMovieButton = ({ movie }) => {
	const [open, setOpen] = React.useState(false);
	const { t } = useTranslation("addMovie");
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button onClick={handleClickOpen} variant="contained" color="primary">
				{`${t("addBtn")}`}
			</Button>
			<AddMovieDialog t={t} movie={movie} onClose={handleClose} open={open} />
		</>
	);
};

export default AddMovieButton;
