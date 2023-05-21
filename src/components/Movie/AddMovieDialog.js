import React, { createContext, useState, useMemo } from "react";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { CancelButton, SubmitButton } from "./styles";
import SelectPriority from "./Dialog/SelectPriority";
import SelectDate from "./Dialog/SelectDate";
import SelectCategories from "./Dialog/SelectCategories";
import { DEFAULT_PRIORITY } from "./constants";
import { changeProperty } from "./Dialog/utils";

export const MovieContext = createContext();

const AddMovieDialog = ({ open, movie, onClose, t }) => {
	const [movieToAdd, setMovieToAdd] = useState({
		id: movie.id,
		priority: DEFAULT_PRIORITY,
		categories: [],
		date: {},
	});
	const handleClose = () => {
		onClose();
	};

	const changePriority = (priority) => {
		changeProperty({
			key: "priority",
			property: priority,
			movieToAdd,
			setMovieToAdd,
		});
	};

	const changeDate = (date) => {
		changeProperty({ key: "date", property: date, movieToAdd, setMovieToAdd });
	};

	const changeCategories = (categories) => {
		changeProperty({
			key: "categories",
			property: categories,
			movieToAdd,
			setMovieToAdd,
		});
	};

	const addMovie = () => {
		console.log(movieToAdd);
	};
	const contextValue = useMemo(
		() => ({ changePriority, changeDate, changeCategories }),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);
	return (
		<MovieContext.Provider value={contextValue}>
			<Dialog onClose={handleClose} open={open} fullWidth>
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
		</MovieContext.Provider>
	);
};

export default AddMovieDialog;
