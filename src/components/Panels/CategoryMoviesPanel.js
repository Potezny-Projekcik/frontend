import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import useMoviesFromFile from "../../hooks/useMoviesFromFile";
import MovieRow from "../Movie/MovieRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Title from "../Movie/Title";
import { useTranslation } from "react-i18next";
import axios from "axios";

const CategoryMoviesPanel = ({ category }) => {
	const [categoryname, setcategoryname] = useState("");
	const { movies } = useMoviesFromFile(
		`http://127.0.0.1:8000/api/usermovies/get-movies-by-category/${category}/`
	);
	const getCategoryName = async () => {
		const response = await axios.get(
			`http://127.0.0.1:8000/api/category/${category}/`
		);
		setcategoryname(response.data.categoryname);
	};
	useEffect(() => {
		getCategoryName();
	}, []);

	console.log(movies);
	const { t } = useTranslation("userMovie");
	return (
		<Grid>
			<Title>User's movies - Category: {categoryname}</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>{`${t("Date")}`}</TableCell>
						<TableCell>{`${t("Title")}`}</TableCell>
						<TableCell>{`${t("Genre")}`}</TableCell>
						<TableCell>{`${t("Year")}`}</TableCell>
						<TableCell>{`${t("Countries")}`}</TableCell>
						<TableCell align="right">{`${t("Rating")}`}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{movies.map((userMovie) => (
						<MovieRow movie={userMovie} />
					))}
				</TableBody>
			</Table>
		</Grid>
	);
};

export default CategoryMoviesPanel;
