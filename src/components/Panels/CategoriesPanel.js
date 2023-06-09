import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { useTranslation } from "react-i18next";
import CategoryItem from "../Category/CategoryItem";
import useCategoriesFromFile from "../../hooks/useCategoriesFromFile";
import UncategorizedItem from "../Category/UncategorizedItem";

const CategoriesPanel = () => {
	const { categories } = useCategoriesFromFile(
		"http://127.0.0.1:8000/api/category/"
	);
	const { t } = useTranslation("userCategory");
	const [dense, setDense] = useState(false);
	return (
		<Grid item xs={12} md={6}>
			<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
				{`${t("title")}`}
			</Typography>
			<List dense={dense}>
				<UncategorizedItem name={`${t("allMovies")}`} />
				{/* <UncategorizedItem name={`${t("uncategorized")}`} /> */}
				{categories.map((category) => (
					<CategoryItem category={category} />
				))}
			</List>
		</Grid>
	);
};

export default CategoriesPanel;
