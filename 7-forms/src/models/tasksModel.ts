import TaskType from "@/Types/TaskType";

export const getAllTasks = (): TaskType[] | null => {
    const tasks = localStorage.getItem("tasks");

    return tasks === null ? null : JSON.parse(tasks);
}