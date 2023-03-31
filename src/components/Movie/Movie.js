import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Movie({ movie }) {
	const { name, directors, languages, genre, country, year, suggestedAge } =
		movie;
	const { t } = useTranslation("movie");
	return (
		<Card>
			<CardContent>
				<Typography>{`${t("name")}: ${name}`}</Typography>
				<Typography>{`${t("year")}: ${year}`}</Typography>
				<Typography>{`${t("country")}: ${country}`}</Typography>
				<Typography>{`${t("genre")}: ${genre}`}</Typography>
				<Typography>{`${t("suggestedAge")}: ${suggestedAge}`}</Typography>
			</CardContent>
		</Card>
	);
}

export default Movie;
