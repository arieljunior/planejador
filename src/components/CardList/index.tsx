import React from "react";
import { Task } from "../../interfaces/task.interface";
import { CardCustom } from "../CardTask";
import { GridContainer } from "./styles";

export const CardList = ({
	list,
	onClickDelete,
	onClickEdit,
	onClickDone,
	onClickBlock,
	onClickClear
}: {
	list: Task[];
	onClickDelete: (id: number) => void;
	onClickEdit: (data: Task) => void;
	onClickDone: (data: Task) => void;
	onClickBlock: (data: Task) => void;
	onClickClear: (data: Task) => void;
}) => {
	return (
		<GridContainer>
			{list.map((item, index) => (
				<CardCustom
					key={index}
					content={item}
					onClickDelete={() => onClickDelete(item.id)}
					onClickEdit={() => onClickEdit(item)}
					onClickDone={() => onClickDone(item)}
					onClickBlock={() => onClickBlock(item)}
					onClickClear={() => onClickClear(item)}
				/>
			))}
		</GridContainer>
	);
};

