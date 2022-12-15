import { Task } from "../../types/Task";
import * as Counter from "../../utilities/getCount";

type CountDisplayProps = {
  status: String;
  tasks: Task[];
};

export default function CountDisplay({ status, tasks }: CountDisplayProps) {
  let count;
  let taskColor;
  if (status === "open") {
    count = Counter.getOpenTasks(tasks);
    taskColor = "white";
  }
  if (status === "zugeteilt") {
    count = Counter.getPreparedTasks(tasks);
    taskColor = "yellow";
  }
  if (status === "unterwegs") {
    count = Counter.getOnTheWayTasks(tasks);
    taskColor = "pink";
  }
  if (status === "erledigt") {
    count = Counter.getSuccessfulTasks(tasks);
    taskColor = "green";
  }
  if (status === "declined") {
    count = Counter.getDeclinedTasks(tasks);
    taskColor = "red";
  }

  return (
    <div className="stat flex flex-col justify-center items-center">
      <div className="stat-value text-7xl" style={{ color: taskColor }}>
        {count}
      </div>
      <div className="stat-title text-xl uppercase">{status}</div>
    </div>
  );
}
