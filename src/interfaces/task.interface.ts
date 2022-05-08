export interface TaskModel {
    title: string
    description: string
}

export interface Task extends TaskModel {
    id: number
}
