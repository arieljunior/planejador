export interface TaskModel {
	title: string;
	description: string;
	startDate: Date | null;
	finalDate: Date | null;
}

export interface Task extends TaskModel {
	id: number;
}
