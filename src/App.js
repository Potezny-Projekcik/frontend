import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./configs/i18n";
import i18next from "i18next";
function App() {
	return (
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<div></div>} />
				</Routes>
			</BrowserRouter>
		</I18nextProvider>
	);
}

export default App;
