import { Task } from "../../types/Task";
import { Location } from "../../types/Location";
import TaskRenderer from "../../components/task/TaskRenderer";
import TaskTableHead from "../../components/task/TaskTableHead";

type TasksTableProps = {
  tasks: Task[];
  location: Location;
};

export default function TasksTable({ tasks, location }: TasksTableProps) {
  return (
    <div className="w-full overflow-x-auto flex-1 mb-12">
      <table className="table w-full ">
        {/* <!-- head --> */}
        <TaskTableHead />
        {/* <!-- body --> */}
        <TaskRenderer tasks={tasks} location={location} />
      </table>
    </div>
  );
}
