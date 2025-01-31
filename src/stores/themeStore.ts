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
			toggleTheme: () =>
				set((state) => ({
					mode: state.mode === "light" ? "dark" : "light",
				})),
		}),
		{
			name: "theme", // name of the item no storage (must be unique)
		},
	),
);
