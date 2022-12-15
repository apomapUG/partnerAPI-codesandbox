import { Task } from "../../types/Task";
import CountDisplay from "./CountDisplay";
import * as TASK_TYPE from "../../utilities/getType";

const dashboardStatus = [
  "open",
  "zugeteilt",
  "unterwegs",
  "erledigt",
  "declined",
];

type TaskCounterProps = {
  tasks: Task[];
};

export default function TaskCounter({ tasks }: TaskCounterProps) {
  const deliveryCount = TASK_TYPE.getDeliveries(tasks);
  const pickupCount = TASK_TYPE.getPickups(tasks);
  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-12">
      <div className="stats shadow w-full">
        {dashboardStatus.map((status) => {
          return <CountDisplay key={status} status={status} tasks={tasks} />;
        })}
      </div>
      <div className="flex justify-evenly items-center w-full p-4 border border-solid border-gray-400 rounded-md text-3xl">
        <div>
          {deliveryCount > 1 ? "Deliveries" : "Delivery"}: {deliveryCount}
        </div>
        <div>
          {pickupCount > 1 ? "Pickups" : "Pickup"}: {pickupCount}
        </div>
      </div>
    </div>
  );
}
