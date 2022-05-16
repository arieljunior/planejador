import React, { useState } from "react";
import {
	FormControl,
	Button,
	InputLabel,
	Input,
	TextField,
} from "@mui/material";
import { TaskModel } from "../../interfaces/task.interface";
import { ActionsContainer, FormContent } from "./styles";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ptBR } from "date-fns/locale";

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
		startDate: null,
		finalDate: null,
	});

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				handleConfirm(form);
			}}>
			<FormContent>
					<TextField
						id='input-title'
						placeholder='Título da tarefa'
						required
						value={form.title}
						onChange={({ target }) => setForm({ ...form, title: target.value })}
					/>

					<TextField
						id='input-description-task'
						placeholder='Descrição da tarefa'
						required
						value={form.description}
						onChange={({ target }) =>
							setForm({ ...form, description: target.value })
						}
					/>

					<LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
						<DateTimePicker
							renderInput={(props) => <TextField {...props} />}
							value={form.startDate}
							label="Data início da tarefa"
							onChange={(newValue) => {
								setForm({ ...form, startDate: newValue });
							}}
						/>
					</LocalizationProvider>

					<LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
						<DateTimePicker
							renderInput={(props) => <TextField {...props} />}
							value={form.finalDate}
							label="Data fim da tarefa"
							onChange={(newValue) => {
								setForm({ ...form, finalDate: newValue });
							}}
						/>
					</LocalizationProvider>
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
