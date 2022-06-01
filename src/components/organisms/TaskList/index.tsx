import React from "react";
import { Task } from "../../../interfaces/task.interface";
import { CardCustom } from "../../atoms/CardTask";
import { GridContainer } from "./styles";
import { isToday, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Typography } from "@mui/material";

type TSeparatedByDay = { [label: string]: Task[] };

export const TaskList = ({
	list,
	onClickDelete,
	onClickEdit,
	onClickDone,
	onClickBlock,
	onClickClear,
}: {
	list: Task[];
	onClickDelete: (id: number) => void;
	onClickEdit: (data: Task) => void;
	onClickDone: (data: Task) => void;
	onClickBlock: (data: Task) => void;
	onClickClear: (data: Task) => void;
}) => {
	const separatedByDay: TSeparatedByDay = list.reduce(
		(previous: TSeparatedByDay, current) => {
			let label = "Sem Data";
			if (current.startDate) {
				const startDateTask = new Date(current.startDate);
				const today = isToday(startDateTask);

				if (today) {
					label = "Hoje";
				} else {
					label = format(startDateTask, "EEEE, dd 'de' MMMM 'de' yyyy", {
						locale: ptBR,
					});
				}
			}

			const currentArrayTasks = previous[label] || [];
			return {
				...previous,
				[label]: [...currentArrayTasks, current],
			};
		},
		{}
	);

	return (
		<>
			{Object.keys(separatedByDay).map((label) => (
				<div>
					<Typography variant='h5'>{label}</Typography>
					<GridContainer>
						{separatedByDay[label].map((item, index) => (
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
				</div>
			))}
		</>
	);
};
