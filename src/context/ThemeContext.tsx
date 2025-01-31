"use client";
import React, { createContext, useContext, type ReactNode } from "react";
import {
	ThemeProvider as MuiThemeProvider,
	type Theme,
} from "@mui/material/styles";
import { getTheme } from "@/hooks/theme";
import { useThemeStore } from "@/stores/themeStore";

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { mode, toggleTheme } = useThemeStore();
	const theme = getTheme(mode);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useThemeContext must be used within a ThemeProvider");
	}
	return context;
};
