import { Task } from "../../types/Task";
import TaskCounter from "../../components/task/TaskCounter";

type TaskBoardProps = {
  tasks: Task[];
};

export default function TaskBoard({ tasks }: TaskBoardProps) {
  return (
    <>
      <TaskCounter tasks={tasks} />
    </>
  );
}
