import React from "react";
import DialogContentTemplate from "./DialogContentTemplate";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const SelectDate = ({ text }) => {
	return (
		<DialogContentTemplate text={text}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker />
			</LocalizationProvider>
		</DialogContentTemplate>
	);
};

export default SelectDate;
