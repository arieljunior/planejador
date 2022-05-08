import React, { useState } from "react";
import { FormControl, Button, InputLabel, Input } from "@mui/material";
import { TaskModel } from "../../interfaces/task.interface";
import { ActionsContainer, FormContent } from "./styles";

interface IFormTask {
	handleConfirm: (data: TaskModel) => void;
	handleCancel: () => void;
	values?: TaskModel;
	idEdit?: number;
}

export const FormTask: React.FC<IFormTask> = ({
	handleConfirm,
	idEdit,
	values,
	handleCancel,
}: IFormTask) => {
	const [form, setForm] = useState<TaskModel>({
		description: values?.description || "",
		title: values?.title || "",
	});

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				handleConfirm(form);
			}}>
			<FormContent>
				<FormControl>
					<InputLabel htmlFor='input-title'>Título</InputLabel>
					<Input
						id='input-title'
						placeholder='Título da tarefa'
						required
						value={form.title}
						onChange={({ target }) => setForm({ ...form, title: target.value })}
					/>
				</FormControl>

				<FormControl>
					<InputLabel htmlFor='input-title'>Tarefa</InputLabel>
					<Input
						id='input-description-task'
						placeholder='Descrição da tarefa'
						required
						value={form.description}
						onChange={({ target }) =>
							setForm({ ...form, description: target.value })
						}
					/>
				</FormControl>
				<ActionsContainer>
					<Button variant='outlined' type='button' onClick={handleCancel}>
						Cancelar
					</Button>
					<Button variant='contained' type='submit'>
						{!!idEdit ? "Editar Tarefa" : "Nova Tarefa"}
					</Button>
				</ActionsContainer>
			</FormContent>
		</form>
	);
};
