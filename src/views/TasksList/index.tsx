import React, { useState, useEffect } from "react";
import { CardList } from "../../components/CardList";
import { ModalCustom } from "../../components/Modal";
import { FormTask } from "../../components/FormTask";
import { CircularProgress, Button } from "@mui/material";
import { toast } from "react-toastify";
import {
	getTasks,
	deleteTask,
	createTask,
	updateTask,
} from "../../services/task.service";
import { ContainerSpinner } from "./styles";
import { Task, TaskModel } from "../../interfaces/task.interface";
import { DataComponent, ModalState } from "./interfaces";

export const TasksList: React.FC = () => {
	const title = "Lista de Tarefas";

	const [data, setData] = useState<DataComponent>({
		loading: true,
		tasks: [],
	});

	const [modalState, setModalState] = useState<ModalState>({
		show: false,
	});

	const hancleCreateTask = async (data: TaskModel) => {
		const created = await createTask(data);

		if (created) {
			toast.success("Tarefa criada com sucesso!");
			closeModal();
			reloadList();
		} else {
			toast.error("Não foi possível criar a tarefa!");
		}
	};

	const reloadList = () => {
		setData({
			...data,
			loading: true,
		});
	};

	const removeTask = async (id: number) => {
		const deleted = await deleteTask(id);

		if (deleted) {
			toast.success("Tarefa removida com sucesso!");
			reloadList();
		} else {
			toast.error("Não foi possível remover essa tarefa!");
		}
	};

	const closeModal = () => {
		setModalState({
			show: false,
		});
	};

	const openModalEditionTask = (id: number) => {
		const task = data.tasks.find((item) => item.id === id);
		setModalState({
			show: true,
			idEdit: id,
			form: task,
		});
	};

	const handleEditTask = async (data: Task) => {
		const updated = await updateTask(data);
		if (updated) {
			toast.success("Tarefa editada com sucesso!");
			closeModal();
			reloadList();
		} else {
			toast.error("Não foi possível editar esta tarefa!");
		}
	};

	const openModalCreateTask = () => {
		setModalState({
			show: true,
		});
	};

	useEffect(() => {
		(async () => {
			if (data.loading) {
				const tasks = await getTasks();
				setData({
					loading: false,
					tasks,
				});
			}
		})();
	}, [data]);

	return (
		<>
			<h1>{title}</h1>
			<Button variant='contained' type='button' onClick={openModalCreateTask}>
				Criar tarefa
			</Button>

			<ModalCustom
				show={modalState.show}
				handleClose={closeModal}
				removeActions
				title={!!modalState.idEdit ? "Atualizar Tarefa" : "Nova Tarefa"}>
				<FormTask
					handleConfirm={(data) => {
						if (!!modalState.idEdit) {
							handleEditTask({
								...data,
								id: modalState.idEdit,
							});
						} else {
							hancleCreateTask(data);
						}
					}}
					handleCancel={closeModal}
					values={modalState.form}
					idEdit={modalState.idEdit}
				/>
			</ModalCustom>

			{data.loading ? (
				<ContainerSpinner>
					<CircularProgress />
				</ContainerSpinner>
			) : (
				<CardList
					list={data.tasks}
					onClickDelete={removeTask}
					onClickEdit={openModalEditionTask}
				/>
			)}
		</>
	);
};
