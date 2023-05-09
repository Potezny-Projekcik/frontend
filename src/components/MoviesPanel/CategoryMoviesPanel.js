import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import useMovies from "../../hooks/useMoviesTest";
import Movie from "../Movie/MovieRow";

function CategoryMoviesPanel() {
  const { movies } = useMoviesTest("TestsJSON/sampleMovies.json");
  const { t } = useTranslation("userMovie");
  category = "Do piwka";
  return (
    <Grid>
      <Title>User's movies - Category: {category}</Title>
      <Table size="medium">
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
          {movies.map((movie) => (
            <MovieRow movie={movie} />
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </Grid>
  );
}

export default MoviesPanel;
