import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryItem = ({ category }) => {
	const { categoryid, categoryname } = category;
	const navigate = useNavigate();
	const handleDeleteButton = async () => {
		await axios.delete(`http://127.0.0.1:8000/api/category/${categoryid}/`);
		navigate(0);
	};
	return (
		<ListItem
			key={categoryid}
			secondaryAction={
				<IconButton edge="end" aria-label="delete">
					<DeleteIcon onClick={handleDeleteButton} />
				</IconButton>
			}
		>
			<Button component={Link} to={`${categoryid}`}>
				<ListItemAvatar>
					<Avatar>
						<FolderIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary={categoryname} />
			</Button>
		</ListItem>
	);
};

CategoryItem.propTypes = {
	category: PropTypes.object,
};

export default CategoryItem;
