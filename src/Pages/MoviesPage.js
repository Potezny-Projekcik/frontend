import MoviesPanel from "../components/Panels/MoviesPanel";
import UIContainer from "./UIContainer";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

const MoviesPage = () => {
	return (
		<UIContainer>
			<LanguageSwitcher />
			<MoviesPanel></MoviesPanel>
		</UIContainer>
	);
};

export default MoviesPage;
