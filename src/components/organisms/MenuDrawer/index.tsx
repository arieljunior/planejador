import React from "react";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

interface IProps {
	options: {
		label: string;
		icon: React.ElementType;
	}[];
	onClickOption: (label: string) => void;
}

export const MenuDrawer: React.FC<IProps> = ({ options, onClickOption }) => {
	return (
		<Drawer variant='permanent' open>
			<List>
				{options.map(({ label, icon: Icon }) => (
					<ListItem key={label} disablePadding>
						<ListItemButton onClick={() => onClickOption(label)}>
							<ListItemIcon>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};
