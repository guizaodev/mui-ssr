"use client";
import { createTheme, type Theme } from "@mui/material/styles";

const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#f44336", // Red color for primary buttons
		},
	},
	typography: {
		fontFamily: "var(--font-roboto)",
	},
});

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#eb8d8d", // Red color for primary buttons
			light: "#f44336",
		},
	},
	typography: {
		fontFamily: "var(--font-roboto)",
	},
});

const getTheme = (mode: "light" | "dark"): Theme => {
	return mode === "light" ? lightTheme : darkTheme;
};

export { lightTheme, darkTheme, getTheme };
