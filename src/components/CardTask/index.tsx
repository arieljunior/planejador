import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	IconButton ,
	Typography,
} from "@mui/material";
import { Task } from "../../interfaces/task.interface";
import { ContainerActions, DeleteIconCustom, EditIcon } from "./styles";

export const CardCustom = ({
	content,
	onClickDelete,
	onClickEdit,
}: {
	content: Task;
	onClickDelete: () => void;
	onClickEdit: () => void;
}) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography color='text.secondary' gutterBottom>
					{`#${content.id}`}
				</Typography>
				<Typography variant='h5' component='div'>
					{content.title}
				</Typography>
				<Typography variant='body2'>{content.description}</Typography>
			</CardContent>
			<CardActions>
				<ContainerActions>
					<IconButton color='primary' onClick={onClickEdit}>
						<EditIcon />
					</IconButton>
					<IconButton color='primary' onClick={onClickDelete}>
						<DeleteIconCustom />
					</IconButton>
				</ContainerActions>
			</CardActions>
		</Card>
	);
};
