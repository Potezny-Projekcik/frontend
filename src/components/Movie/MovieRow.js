import React from "react";
import { CardContent, CardHeader, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InternalMovieList, InternalMovieListItem, MovieCard } from "./styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

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
    <TableRow key={id}>
      <TableCell>{view_date}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{genre}</TableCell>
      <TableCell>{year}</TableCell>
      <TableCell>{production_companies}</TableCell>
      <TableCell>{production_countries}</TableCell>
      <TableCell>{languages}</TableCell>
      <TableCell align="right">{rating}</TableCell>
    </TableRow>
  );
};

export default MovieRow;
