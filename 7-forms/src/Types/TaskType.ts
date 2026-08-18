export default interface TaskType {
    id: string
    title: string
    description: string
    dueDate: string,
    priority: "Urgent" | "High priority" | "Medium priority" | "Low priority" | null
}