import React, { useState, useEffect } from "react";
import { TaskList } from "../../components/organisms/TaskList";
import { ModalCustom } from "../../components/molecules/Modal";
import { FormTask } from "../../components/organisms/FormTask";
import {
	CircularProgress,
	Button,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
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

	const openModalEditionTask = (task: Task) => {
		setModalState({
			show: true,
			idEdit: task.id,
			form: task,
		});
	};

	const editTask = async (data: Task) => {
		const updated = await updateTask(data);
		if (updated) {
			toast.success("Tarefa editada com sucesso!");
			closeModal();
			reloadList();
		} else {
			toast.error("Não foi possível editar esta tarefa!");
		}
	};

	const completeTask = async (data: Task) => {
		const updated = await updateTask({ ...data, done: true, blocked: false });
		if (updated) {
			reloadList();
		} else {
			toast.error("Não foi possível completar sua tarefa");
		}
	};

	const blockTask = async (data: Task) => {
		const updated = await updateTask({ ...data, done: false, blocked: true });
		if (updated) {
			reloadList();
		} else {
			toast.error("Não foi possível bloquear sua tarefa");
		}
	};

	const clearStatusTask = async (data: Task) => {
		const updated = await updateTask({ ...data, done: false, blocked: false });
		if (updated) {
			reloadList();
		} else {
			toast.error("Não foi possível limpar o status da tarefa");
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
		<Box>
			<Drawer variant='permanent' open>
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={"Todas tarefas"} />
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={"Tarefas pendentes"} />
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={"Tarefas atrasadas"} />
						</ListItemButton>
					</ListItem>
	
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={"Tarefas bloqueadas"} />
						</ListItemButton>
					</ListItem>
					
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary={"Tarefas concluídas"} />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>

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
							editTask({
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
				<TaskList
					list={data.tasks}
					onClickDelete={removeTask}
					onClickEdit={openModalEditionTask}
					onClickDone={completeTask}
					onClickBlock={blockTask}
					onClickClear={clearStatusTask}
				/>
			)}
		</Box>
	);
};
