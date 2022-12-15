import { Task } from "../types/Task"

export const getDeliveries = (tasks:Task[]) => {
    const deliveries = tasks.filter(task => task.task_type === "delivery" )
    return deliveries.length
}
export const getPickups = (tasks:Task[]) => {
    const pickups = tasks.filter(task => task.task_type === "pickup"  )
    return pickups.length
}
