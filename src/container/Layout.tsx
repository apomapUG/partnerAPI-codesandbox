import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import { Task } from "../types/Task";
import { Location } from "../types/Location";
import TasksTable from "../components/TasksTable/TasksTable";
import {
  getDeclinedTasks,
  getOnTheWayTasks,
  getOpenTasks,
  getPreparedTasks,
  getSuccessfulTasks,
} from "../utilities/getCount";
import { getDeliveries, getPickups } from "../utilities/getType";
import StatsCard from "../components/Cards/StatsCard";
import ActivtityCard from "../components/Cards/ActivtityCard";
import { IconBoxSeam, IconTruck } from "@tabler/icons";

type LayoutProps = {
  tasks: Task[];
  location: Location;
};

export default function Layout({ tasks, location }: LayoutProps) {
  const theme = useMantineTheme();
  const PRIMARY_COL_HEIGHT = 700;
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 3 - theme.spacing.md / 2;
  const TERTIARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 4 - theme.spacing.md / 2;

  // * Derived
  const openTasks = getOpenTasks(tasks);
  const preparedTasks = getPreparedTasks(tasks);
  const onTheWayTasks = getOnTheWayTasks(tasks);
  const successfulTasks = getSuccessfulTasks(tasks);
  const declinedTasks = getDeclinedTasks(tasks);
  const areDeliveries = getDeliveries(tasks);
  const arePickups = getPickups(tasks);

  const statsObject = [
    { label: "Open", value: openTasks, color: "grey" },
    { label: "Prepared", value: preparedTasks, color: "yellow" },
    { label: "Enroute", value: onTheWayTasks, color: "orange" },
    { label: "Completed", value: successfulTasks, color: "green" },
    { label: "Declined", value: declinedTasks, color: "red" },
  ];

  const deliveryCardTitle = areDeliveries > 1 ? "Deliveries" : "Delivery";
  const pickupCardTitle = arePickups > 1 ? "Pick-Ups" : "PickUp";

  return (
    <Container my="md" className="w-full h-full ">
      <SimpleGrid
        cols={1}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <Grid gutter="md">
          <Grid.Col>
            <div
              style={{ height: TERTIARY_COL_HEIGHT }}
              className="flex flex-col justify-center items-center rounded-md border border-solid border-gray-800"
            >
              <h5>Welcome to</h5>
              <h1
                className={`uppercase text-4xl`}
                style={{ color: location.color }}
              >
                {location.name}
              </h1>
            </div>
          </Grid.Col>
          <Grid.Col span={8}>
            <div
              style={{ height: SECONDARY_COL_HEIGHT }}
              className="flex flex-col justify-center items-center text-center rounded-md border border-solid border-gray-800"
            >
              <StatsCard
                title="TASKS LOG"
                completed={successfulTasks}
                total={tasks.length}
                stats={statsObject}
              />
            </div>
          </Grid.Col>
          <Grid.Col span={4}>
            <div
              style={{ height: SECONDARY_COL_HEIGHT }}
              className="flex justify-evenly items-center text-center  rounded-md border border-solid border-gray-800"
            >
              <ActivtityCard
                title={deliveryCardTitle}
                total={areDeliveries}
                icon={<IconBoxSeam size={34} stroke={1.5} />}
              />
              <ActivtityCard
                title={pickupCardTitle}
                total={arePickups}
                icon={<IconTruck size={34} stroke={1.5} />}
              />

              {/* <div className="flex flex-col flex-wrap justify-center self-start w-full">
                <p className="flex justify-evenly items-center w-full">
                  {areDeliveries > 1 ? "Deliveries" : "Delivery"}:
                  <span> {areDeliveries} </span>
                </p>
                <p className="flex justify-evenly items-center w-full">
                  {arePickups > 1 ? "PickUps" : "PickUp"}:
                  <span> {arePickups} </span>
                </p>
              </div> */}
            </div>
          </Grid.Col>
        </Grid>
        <div
          style={{ height: PRIMARY_COL_HEIGHT, marginBottom: 32 }}
          className="rounded-md border-none"
        >
          <TasksTable tasks={tasks} location={location} />
        </div>
      </SimpleGrid>
    </Container>
  );
}
