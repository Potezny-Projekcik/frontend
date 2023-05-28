import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import movieEn from "../translations/en/movie.json";
import moviePl from "../translations/pl/movie.json";
import loginEn from "../translations/en/login.json";
import loginPl from "../translations/pl/login.json";
import registerEn from "../translations/en/register.json";
import registerPl from "../translations/pl/register.json";
import userMovieEn from "../translations/en/userMovie.json";
import userMoviePl from "../translations/pl/userMovie.json";
import userCategoryEn from "../translations/en/userCategory.json";
import userCategoryPl from "../translations/pl/userCategory.json";

import LanguageSwitcherEn from "../translations/en/LanguageSwitcher.json";
import LanguageSwitcherPl from "../translations/pl/LanguageSwitcher.json"

const resources = {
	en: {
		movie: movieEn,
		login: loginEn,
		register: registerEn,
		userMovie: userMovieEn,
		userCategory: userCategoryEn,
		LanguageSwitcher: LanguageSwitcherEn
	},
	pl: {
		movie: moviePl,
		login: loginPl,
		register: registerPl,
		userMovie: userMoviePl,
		userCategory: userCategoryPl,
		LanguageSwitcher: LanguageSwitcherPl
	},
};

i18n
	.use(detector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		fallbackLng: "en", // use en if detected lng is not available

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
