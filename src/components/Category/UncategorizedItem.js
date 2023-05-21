import React from "react";
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



const UncategorizedItem = ({name}) => {
    return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <Button component={Link} to={name}>
          <ListItemAvatar>
           <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} />
        </Button>
      </ListItem>
    );
};


UncategorizedItem.propTypes = {
    category: PropTypes.string,
  };

export default UncategorizedItem;