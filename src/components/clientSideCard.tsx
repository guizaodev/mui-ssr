"use client";

import CustomButton, {
	CustomButtonTeste,
	CustomButtonTeste2,
} from "./styledButton";

const ClientSideCard = () => {
	return (
		<div>
			<h2>Client Side</h2>
			<CustomButton>Click me</CustomButton>
			<CustomButtonTeste>Click me 1</CustomButtonTeste>
			<CustomButtonTeste2>Click me 2</CustomButtonTeste2>
		</div>
	);
};

export default ClientSideCard;
