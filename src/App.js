import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./configs/i18n";
import i18next from "i18next";
import MoviesPage from "./Pages/MoviesPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import CategoryMoviesPage from "./Pages/CategoryMoviesPage";
import CategoriesPage from "./Pages/CategoriesPage";
import RouterGuard from "./hooks/RouterGuard";
import LogoutPage from "./Pages/LogoutPage";


const App = () => {
	const removeToken = () => {
		sessionStorage.removeItem("accessToken");
	}
	return (
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/movies" element={<RouterGuard><MoviesPage /></RouterGuard>} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/categories/:id" element={<RouterGuard><CategoryMoviesPage /></RouterGuard>} />
					<Route path="/categories" element={<RouterGuard><CategoriesPage /></RouterGuard>} />
					<Route path="/logout" element={<LogoutPage/>} />
				</Routes>
			</BrowserRouter>
		</I18nextProvider>
	);
};

export default App;
