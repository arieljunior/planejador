export interface TaskModel {
	title: string;
	description: string;
	startDate: string | null;
	finalDate: string | null;
	done: boolean;
	blocked: boolean;
}

export interface Task extends TaskModel {
	id: number;
}
