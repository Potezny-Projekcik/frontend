import MoviesPanel from "../components/Panels/MoviesPanel";
import UIContainer from "./UIContainer";
import LoadingCircle from "../components/LoadingCircle/LoadingCircle";

const MoviesPage = () => {
	return (
		<UIContainer>
			<MoviesPanel></MoviesPanel>
			<LoadingCircle />
		</UIContainer>
	);
};

export default MoviesPage;
