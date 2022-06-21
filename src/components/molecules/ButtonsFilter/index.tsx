import React from "react";
import {
	Button
} from "@mui/material";
import {Ul, Li} from './styles';

interface IProps {
	options: {
		label: string;
		icon: React.ElementType;
	}[];
	onClick: (label: string) => void;
}

export const ButtonsFilter: React.FC<IProps> = ({ options, onClick }) => {
	return (
		<div>
			<Ul>
				{options.map(({ label, icon: Icon }) => (
					<Li key={label}>
						<Button variant="outlined" onClick={() => onClick(label)} startIcon={<Icon />}>
							{label}
						</Button>
					</Li>
				))}
			</Ul>
		</div>
	);
};
