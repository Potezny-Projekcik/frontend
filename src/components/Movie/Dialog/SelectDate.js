import React, { useContext, useState } from "react";
import DialogContentTemplate from "./DialogContentTemplate";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { MovieContext } from "../AddMovieDialog";
const SelectDate = ({ text }) => {
	const [date, setDate] = useState(dayjs);
	const { changeDate } = useContext(MovieContext);
	const handleChange = (newDate) => {
		setDate(newDate);
		changeDate(newDate);
	};
	return (
		<DialogContentTemplate text={text}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker value={date} onChange={handleChange} />
			</LocalizationProvider>
		</DialogContentTemplate>
	);
};

export default SelectDate;
