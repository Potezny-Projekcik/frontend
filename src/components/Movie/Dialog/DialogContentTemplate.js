import { DialogContent, DialogContentText } from "@mui/material";
import React from "react";

const DialogContentTemplate = ({ children, text }) => {
	return (
		<DialogContent>
			<DialogContentText>{text}</DialogContentText>
			{children}
		</DialogContent>
	);
};

export default DialogContentTemplate;
