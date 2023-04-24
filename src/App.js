import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./configs/i18n";
import i18next from "i18next";
import MoviesPage from "./Pages/MoviesPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
	return (
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<Routes>
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</BrowserRouter>
		</I18nextProvider>
	);
}

export default App;
