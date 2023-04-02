import { Card, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";

export const InternalMovieListItem = styled(ListItem)({
	paddingBottom: "5px",
	paddingTop: "5px",
});

export const InternalMovieList = styled(List)({
	paddingBottom: "2px",
	paddingTop: "2px",
});

export const MovieCard = styled(Card)({
	height: "100%",
	margin: "20px",
});
