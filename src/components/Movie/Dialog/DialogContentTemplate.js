import { DialogContent, DialogContentText } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const DialogContentTemplate = ({ children, text }) => {
	return (
		<DialogContent>
			<DialogContentText>{text}</DialogContentText>
			{children}
		</DialogContent>
	);
};

DialogContentTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
};
export default DialogContentTemplate;
