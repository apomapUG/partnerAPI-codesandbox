import { Task } from "../../types/Task";
import { Location } from "../../types/Location";
import LocationButton from "../location/LocationButton";

type TaskItemProps = {
  task: Task;
  location: Location;
};

export default function TaskItem({ task, location }: TaskItemProps) {
  const { task_type, task_status, task_tags } = task;

  return (
    <tbody className="capitalize">
      <tr>
        <th>
          <LocationButton locationColor={location.color} />
        </th>

        <td> {task_type} </td>
        <td> {task_status} </td>
        <td> {location.name} </td>
        <td className="flex justify-start items-center gap-2 flex-wrap max-w-sm">
          {task_tags.map((tag) => (
            <div key={tag} className="badge badge-accent badge-outline">
              {tag}
            </div>
          ))}
        </td>
      </tr>
    </tbody>
  );
}
