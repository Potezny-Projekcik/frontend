import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { useTranslation } from "react-i18next";
import CategoryItem from "../Category/CategoryItem";
import useCategoriesFromFile from "../../hooks/useCategoriesFromFile";
import { useState } from "react";

const CategoriesPanel = () => {
  const { categories } = useCategoriesFromFile(
    "TestsJSON/sampleCategories.json"
  );
  console.log(categories);
  const { t } = useTranslation("userCategory");
  const [dense, setDense] = useState(false);
  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        {`${t("title")}`}
      </Typography>
      <List dense={dense}>
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </List>
    </Grid>
  );
};

export default CategoriesPanel;
