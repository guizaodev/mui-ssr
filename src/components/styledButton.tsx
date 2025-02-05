"use client";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import stylex from "@emotion/styled";

const CustomButton = styled(Button)({
	// backgroundColor: "#007bff",
	// color: "white",
	"&:hover": {
		backgroundColor: "#fdfa2f",
	},
});

export const CustomButtonTeste = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
}));

export const CustomButtonTeste2 = stylex(Button)`
	background-color: ${({ theme }) => theme.palette.primary.light};
	color: white;
	&:hover {
		background-color: green;
	}
`;

export default CustomButton;
