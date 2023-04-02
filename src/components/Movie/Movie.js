import React from "react";
import { Card, CardContent, CardHeader, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InternalMovieList, InternalMovieListItem, MovieCard } from "./styles";
import { hasLoadedNamespace } from "i18next";

function ListTemplate({ elements }) {
	return (
		<InternalMovieList>
			{elements.map(({ name }) => (
				<InternalMovieListItem>{name}</InternalMovieListItem>
			))}
		</InternalMovieList>
	);
}

function Movie({ movie }) {
	const {
		title,
		release_date,
		genres,
		production_companies,
		spoken_languages,
		production_countries,
	} = movie;
	console.log(movie);
	const { t } = useTranslation("movie");
	return (
		<MovieCard variant="outlined">
			<CardHeader
				title={`${title}`}
				subheader={`${t("release")}: ${release_date}`}
			/>
			<CardContent>
				<Grid container spacing={3} direction="column">
					<Grid item>
						<Typography>{`${t("countries")}:`}</Typography>
						<ListTemplate elements={production_countries} />
					</Grid>
					<Grid item>
						<Typography>{`${t("genres")}:`}</Typography>
						<ListTemplate elements={genres} />
					</Grid>
					<Grid item>
						<Typography>{`${t("languages")}:`}</Typography>
						<ListTemplate elements={spoken_languages} />
					</Grid>
					<Grid item>
						<Typography>{`${t("production")}:`}</Typography>
						<ListTemplate elements={production_companies} />
					</Grid>
				</Grid>
			</CardContent>
		</MovieCard>
	);
}

export default Movie;
