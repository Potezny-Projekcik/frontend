import React, { createContext, useState, useMemo } from "react";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { CancelButton, SubmitButton } from "./styles";
import SelectPriority from "./Dialog/SelectPriority";
import SelectDate from "./Dialog/SelectDate";
import SelectCategories from "./Dialog/SelectCategories";
import { DEFAULT_PRIORITY } from "./constants";
import { changeProperty } from "./Dialog/utils";
import PropTypes from "prop-types";
import axios from "axios";

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
			value: priority,
			movieToAdd,
			setMovieToAdd,
		});
	};

	const changeDate = (date) => {
		changeProperty({ key: "date", value: date, movieToAdd, setMovieToAdd });
	};

	const changeCategories = (categories) => {
		changeProperty({
			key: "categories",
			value: categories,
			movieToAdd,
			setMovieToAdd,
		});
	};

	const addMovie = async () => {
		let response;
		try {
			console.log(movieToAdd.categories);
			const movieToPost = {
				title: movie.title,
				genre: movie.genres[0].name,
				countryoforigin: movie.production_countries[0].name,
				productionyear: movie.release_date.slice(0, 10),
			};
			response = await axios.post(
				"http://127.0.0.1:8000/api/movie/",
				movieToPost
			);
		} catch (error) {
			console.error(error);
		}

		try {
			const movieid = await response.data.movieid;
			console.log(movieToAdd.date);
			const date = `${movieToAdd.date.$y}-${movieToAdd.date.$M + 1}-${
				movieToAdd.date.$D
			}`;
			const userMovieToPost = {
				movieid,
				userid: 1,
				sessionpriority: movieToAdd.priority,
				sessiondate: date,
			};
			console.log(JSON.stringify(userMovieToPost));

			const res2 = await axios.post(
				"http://127.0.0.1:8000/api/usermovies/",
				userMovieToPost
			);
			console.log(res2);
			const usermovieid = await res2.data.usermovieid;

			for (const category of movieToAdd.categories) {
				const movieCategory = {
					usermovieid,
					categoryid: category,
				};
				console.log(JSON.stringify(movieCategory));
				await axios.post(
					"http://127.0.0.1:8000/api/moviecategory/",
					movieCategory
				);
			}
		} catch (error) {
			console.error(error);
		}

		onClose();
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

AddMovieDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	movie: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
	t: PropTypes.func.isRequired,
};

export default AddMovieDialog;
