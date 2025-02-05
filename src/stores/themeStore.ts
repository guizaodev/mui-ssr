import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
	mode: "light" | "dark";
	toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			mode: "light",
			toggleTheme: () => {
				set((state) => {
					const newMode = state.mode === "light" ? "dark" : "light";
					document.cookie = `theme=${newMode}; path=/`;
					return { mode: newMode };
				});
			},
		}),
		{
			name: "theme", // name of the item in storage (must be unique)
		},
	),
);
