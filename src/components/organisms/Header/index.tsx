import { Typography } from "@mui/material";
import React from "react";
import { ContentHeader } from "./styles";
interface IProps {}

export const Header: React.FC<IProps> = () => {
	return (
		<header>
			<ContentHeader>
				<div>
					<Typography variant='h3'>Planejador App</Typography>
				</div>
				<div>Menu nav</div>
			</ContentHeader>
		</header>
	);
};
