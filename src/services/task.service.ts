import http from "../config/http";
import { Task, TaskModel } from "../interfaces/task.interface";

export const getTasks = async (): Promise<Task[]> => {
	const { data } = await http.get("/tasks");
	return data;
};

export const deleteTask = async (id: number): Promise<boolean> => {
	const { status } = await http.delete(`/tasks/${id}`);
	return status === 200;
};

export const createTask = async (data: TaskModel): Promise<boolean> => {
	const { status } = await http.post(`/tasks/`, data);
	return status === 201;
};

export const updateTask = async (data: Task): Promise<boolean> => {
	const { id } = data;
	const { status } = await http.put(`/tasks/${id}`, data);
	return status === 200;
};
