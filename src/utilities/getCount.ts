import { Task } from "../types/Task"
export const getOpenTasks = (tasks:Task[]) => {
    const openTasks = tasks.filter(task => task.task_status === "unassigned" || task.task_status === "assigned" || task.task_status === "attached" || task.task_status === "optimizing" )
    return openTasks.length
}
export const getPreparedTasks = (tasks:Task[]) => {
    const preparedTasks = tasks.filter(task => task.task_status === "prepared"  )
    return preparedTasks.length
}
export const getOnTheWayTasks = (tasks:Task[]) => {
    const onTheWayTasks = tasks.filter(task => task.task_status === "ontheway"  )
    return onTheWayTasks.length
}
export const getSuccessfulTasks = (tasks:Task[]) => {
    const successfulTasks = tasks.filter(task => task.task_status === "successfull" || task.task_status === "successful" )
    return successfulTasks.length
}
export const getDeclinedTasks = (tasks:Task[]) => {
    const declinedTasks = tasks.filter(task => task.task_status === "declined" )
    return declinedTasks.length
}