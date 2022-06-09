import { Task, TaskModel } from "../../interfaces/task.interface"

export interface DataComponent {
    loading: boolean
    tasks: Task[]
}

export interface ModalState {
    show: boolean
    form?: TaskModel
    idEdit?: number
}