"use client";
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import {
	ThemeProvider as MuiThemeProvider,
	type Theme,
} from "@mui/material/styles";
import { getTheme } from "@/hooks/theme";
import { useThemeStore } from "@/stores/themeStore";

interface ThemeContextProps {
	theme: Theme;
	toggleTheme: VoidFunction;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({
	children,
	initialTheme,
}: { children: ReactNode; initialTheme: "light" | "dark" }) => {
	const { mode, toggleTheme } = useThemeStore();
	const [theme, setTheme] = useState<Theme>(getTheme(initialTheme));

	useEffect(() => {
		setTheme(getTheme(mode));
	}, [mode]);

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
