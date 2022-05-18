import React from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
// import { } from "./styles";

interface IModalCustom {
	show: boolean;
	handleClose: () => void;
	handleConfirm?: () => void;
	title: string;
	children: React.ReactNode;
	removeActions?: boolean;
}

export const ModalCustom: React.FC<IModalCustom> = ({
	show,
	handleClose,
	handleConfirm,
	title,
	children,
	removeActions = false,
}: IModalCustom) => {
	return (
		<Dialog open={show} onClose={handleClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{children}</DialogContent>
			{!removeActions && (
				<DialogActions>
					<Button onClick={handleClose}>Fechar</Button>
					<Button onClick={handleConfirm}>Confirmar</Button>
				</DialogActions>
			)}
		</Dialog>
	);
};
