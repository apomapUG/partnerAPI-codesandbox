import { Task } from "../../types/Task";
import { Location } from "../../types/Location";
import TaskItem from "./TaskItem";

type TaskRendererProps = {
  tasks: Task[];
  location: Location;
};

export default function TaskRenderer({ tasks, location }: TaskRendererProps) {
  return (
    <>
      {tasks.map((task) => {
        return <TaskItem key={task.task_id} task={task} location={location} />;
      })}
    </>
  );
}
