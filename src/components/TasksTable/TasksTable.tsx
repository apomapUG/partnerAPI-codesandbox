import { Chip, createStyles, ScrollArea, Table } from "@mantine/core";
import { useState } from "react";
import { Location } from "../../types/Location";
import { Task } from "../../types/Task";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  tasks: Task[];
  location: Location;
}

function TasksTable({ tasks, location }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = tasks.map((task) => (
    <tr key={task.task_id}>
      <td>
        <div
          className={`flex justify-center items-center rounded-full w-2 h-2`}
          style={{
            backgroundColor: location.color ? `${location.color}` : "#ccc",
          }}
        ></div>
      </td>
      <td>{task.task_id}</td>
      <td>{task.task_type.toUpperCase()}</td>
      <td>{task.task_status.toUpperCase()}</td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {task.task_tags.map((tag, index) => (
            <Chip key={index} size="xs" radius="md" variant="filled">
              {tag.toUpperCase()}
            </Chip>
          ))}
        </div>
      </td>
    </tr>
  ));

  return (
    <ScrollArea
      sx={{ height: 800, marginBottom: 24 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table sx={{ minWidth: 700 }}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Type</th>
            <th>Status</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default TasksTable;
