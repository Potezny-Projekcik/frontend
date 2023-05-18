import { Grid } from "@mui/material";
import useMoviesTest from "../../hooks/useMoviesTest";
import MovieRow from "../Movie/MovieRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Title from "../Movie/Title";
import { useTranslation } from "react-i18next";

const preventDefault = (event) => {
  event.preventDefault();
};
function CategoryMoviesPanel() {
  const { movies } = useMoviesTest("TestsJSON/sampleMovies.json");
  console.log(movies);
  const { t } = useTranslation("userMovie");
  const category = "Do piwka";
  return (
    <Grid>
      <Title>User's movies - Category: {category}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>{`${t("Date")}`}</TableCell>
            <TableCell>{`${t("Title")}`}</TableCell>
            <TableCell>{`${t("Genre")}`}</TableCell>
            <TableCell>{`${t("Year")}`}</TableCell>
            <TableCell>{`${t("Companies")}`}</TableCell>
            <TableCell>{`${t("Countries")}`}</TableCell>
            <TableCell>{`${t("Languages")}`}</TableCell>
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
}

export default CategoryMoviesPanel;
