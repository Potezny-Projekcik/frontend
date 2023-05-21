import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useCategoriesFromFile = (url) => {
  const [categories, setcategories] = useState([]);
  const fetchCategories = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setcategories(response.data.categories);
    } catch (err) {
      console.error(err);
    }
  }, [url]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return { categories };
};

export default useCategoriesFromFile;
