import { Button, Card, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";
import { green, grey } from "@mui/material/colors";

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

export const CancelButton = styled(Button)({
	backgroundColor: grey[500],
	"&:hover": {
		backgroundColor: grey[700],
	},
});

export const SubmitButton = styled(Button)({
	backgroundColor: green[500],
	"&:hover": {
		backgroundColor: green[700],
	},
});
