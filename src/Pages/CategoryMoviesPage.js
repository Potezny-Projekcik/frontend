import CategoryMoviesPanel from "../components/Panels/CategoryMoviesPanel";
import UIContainer from "./UIContainer";
import { useParams } from "react-router-dom";

const CategoryMoviesPage = () => {
  const routeParams = useParams();
  return (
    <UIContainer>
      <CategoryMoviesPanel category={routeParams.id}/>
    </UIContainer>
  );
};

export default CategoryMoviesPage;
