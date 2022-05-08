import React from "react";
import { Task } from "../../interfaces/task.interface";
import { CardCustom } from "../CardTask";
import { GridContainer } from "./styles";

export const CardList = ({
	list,
	onClickDelete,
	onClickEdit,
}: {
	list: Task[];
	onClickDelete: (id: number) => void;
	onClickEdit: (id: number) => void;
}) => {
	return (
		<GridContainer>
			{list.map((item, index) => (
				<CardCustom
					key={index}
					content={item}
					onClickDelete={() => onClickDelete(item.id)}
					onClickEdit={() => onClickEdit(item.id)}
				/>
			))}
		</GridContainer>
	);
};

