import React from "react";
import { CardContent, CardHeader, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InternalMovieList, InternalMovieListItem, MovieCard } from "./styles";

const MovieRow = ({ movie }) => {
  const {
    id,
    view_date,
    title,
    genre,
    year,
    production_companies,
    languages,
    production_countries,
    rating,
  } = movie;
  return (
    <TableRow key={movie.id}>
      <TableCell>{movie.view_date}</TableCell>
      <TableCell>{movie.title}</TableCell>
      <TableCell>{movie.genre}</TableCell>
      <TableCell>{movie.year}</TableCell>
      <TableCell>{movie.production_companies}</TableCell>
      <TableCell>{movie.production_countries}</TableCell>
      <TableCell>{movie.languages}</TableCell>
      <TableCell align="right">{movies.rating}</TableCell>
    </TableRow>
  );
};
