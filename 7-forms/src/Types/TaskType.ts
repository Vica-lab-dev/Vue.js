import {BoardType} from "@/Types/boards/BoardType";

export default interface TaskType {
    id: string
    title: string
    description: string
    dueDate: string,
    priority: "urgent" | "highpriority" | "mediumpriority" | "lowpriority" | null,
    board: BoardType,
}