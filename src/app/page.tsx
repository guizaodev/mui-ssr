// import Image from "next/image";
import ThemeToggleButton from "@/components/toggle-theme/toggle-theme";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Button variant="contained">Contained</Button>
				<ThemeToggleButton />
			</main>
		</div>
	);
}
