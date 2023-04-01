import React from "react";
import { Card, CardContent, CardHeader, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InternalMovieList, InternalMovieListItem } from "./styles";

function Movie({ movie }) {
	const { name, directors, languages, genre, country, year, suggestedAge } =
		movie;
	const { t } = useTranslation("movie");
	return (
		<Card variant="outlined">
			<CardHeader title={`${name}`} subheader={`${t("year")}: ${year}`} />
			<CardContent>
				<Grid container spacing={20}>
					<Grid item>
						<Typography>{`${t("country")}: ${country}`}</Typography>
						<Typography>{`${t("genre")}: ${genre}`}</Typography>
						<Typography>{`${t("suggestedAge")}: ${suggestedAge}`}</Typography>
					</Grid>
					<Grid item>
						<Typography>{`${t("directors")}:`}</Typography>
						<InternalMovieList>
							{directors.map((director) => (
								<InternalMovieListItem>{director}</InternalMovieListItem>
							))}
						</InternalMovieList>
					</Grid>
					<Grid item>
						<Typography>{`${t("languages")}:`}</Typography>
						<InternalMovieList>
							{languages.map((lang) => (
								<InternalMovieListItem>{lang}</InternalMovieListItem>
							))}
						</InternalMovieList>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default Movie;
