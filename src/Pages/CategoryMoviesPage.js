import CategoryMoviesPanel from "../components/Panels/CategoryMoviesPanel";
import UIContainer from "./UIContainer";
import { useParams } from "react-router-dom";

const CategoryMoviesPage = () => {
  const {id} = useParams();
  return (
    <UIContainer>
      <CategoryMoviesPanel category={id}/>
    </UIContainer>
  );
};

export default CategoryMoviesPage;
