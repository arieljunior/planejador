import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	CardHeader,
	IconButton,
	Typography,
	Avatar,
} from "@mui/material";
import { Task } from "../../../interfaces/task.interface";
import {
	ContainerActions,
	TextDateTime,
	DoneIconCustom,
	BlockIconCustom,
	ClearIconCustom
} from "./styles";
import { MenuDots } from "../../molecules/MenuDots";
import { formatDateString } from "../../../utils/date.utils";

export const CardCustom = ({
	content,
	onClickDelete,
	onClickEdit,
	onClickBlock,
	onClickDone,
	onClickClear
}: {
	content: Task;
	onClickDelete: () => void;
	onClickEdit: () => void;
	onClickDone: () => void;
	onClickBlock: () => void;
	onClickClear: () => void;
}) => {
	let startDateFormated =
		content.startDate && formatDateString(content.startDate);
	let finalDateFormated =
		content.finalDate && formatDateString(content.finalDate);

	const handleActionsMenuDots = (optionName: string) => {
		switch (optionName.toUpperCase()) {
			case "EDITAR":
				onClickEdit();
				break;
			case "EXCLUIR":
				onClickDelete();
				break;
		}
	};

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardHeader
				avatar={<Avatar>{content.id}</Avatar>}
				action={
					<MenuDots
						options={["Editar", "Excluir"]}
						handleClickOption={handleActionsMenuDots}
					/>
				}
				title={content.title}
				subheader={
					<Typography
						color={content.done ? "green" : content.blocked ? "orange" : ""}>
						{content.done ? "Concluída" : content.blocked && "Bloqueada"}
					</Typography>
				}
			/>
			<CardContent>
				<Typography variant='body2'>{content.description}</Typography>
				<TextDateTime>{`${startDateFormated} - ${finalDateFormated}`}</TextDateTime>
			</CardContent>
			<CardActions>
				<ContainerActions>
					<IconButton
						color='warning'
						disabled={!content.blocked && !content.done}
						onClick={onClickClear}>
						<ClearIconCustom />
					</IconButton>
					<IconButton
						color='warning'
						disabled={content.blocked}
						onClick={onClickBlock}>
						<BlockIconCustom />
					</IconButton>
					<IconButton
						color='success'
						disabled={content.done}
						onClick={onClickDone}>
						<DoneIconCustom />
					</IconButton>
				</ContainerActions>
			</CardActions>
		</Card>
	);
};
