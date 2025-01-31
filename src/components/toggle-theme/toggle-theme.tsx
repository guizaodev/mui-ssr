"use client";

import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import Button from "@mui/material/Button";

const ThemeToggleButton = () => {
	const { toggleTheme } = useThemeContext();

	return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default ThemeToggleButton;
