import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingBox } from "./styles";

const LoadingCircle = () => {
	return (
		<LoadingBox>
			<CircularProgress />
		</LoadingBox>
	);
};

export default LoadingCircle;
