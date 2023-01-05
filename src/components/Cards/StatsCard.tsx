import { Card, createStyles, Group, RingProgress, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1,
  },

  inner: {
    display: "flex",

    [theme.fn.smallerThan(350)]: {
      flexDirection: "column",
    },
  },

  ring: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",

    [theme.fn.smallerThan(350)]: {
      justifyContent: "center",
      marginTop: theme.spacing.md,
    },
  },
}));

interface StatsCard {
  title: string;
  completed: number;
  total: number;
  stats: {
    label: string;
    value: number;
    color: string;
  }[];
}

function StatsCard({ title, total, completed, stats }: StatsCard) {
  const { classes, theme } = useStyles();
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className={classes.label} color={stat.color}>
        {stat.value}
      </Text>
      <Text size="md" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card
      withBorder
      p="xl"
      radius="md"
      className={classes.card}
      style={{ width: "100%", height: "100%" }}
    >
      <div className={classes.inner}>
        <div>
          <Text size="xl" className={classes.label}>
            {title}
          </Text>
          <div style={{ marginBottom: 40 }}>
            <Text className={classes.lead} mt={30}>
              {total}
            </Text>
            <Text size="xs" color="dimmed">
              Total
            </Text>
          </div>
          <Group mt="lg">{items}</Group>
        </div>

        <div className={classes.ring}>
          <RingProgress
            roundCaps
            thickness={6}
            size={150}
            sections={[
              { value: (completed / total) * 100, color: theme.primaryColor },
            ]}
            label={
              <div>
                <Text
                  align="center"
                  size="lg"
                  className={classes.label}
                  sx={{ fontSize: 22 }}
                >
                  {((completed / total) * 100).toFixed(0)}%
                </Text>
                <Text align="center" size="xs" color="dimmed">
                  Sucess Rate
                </Text>
              </div>
            }
          />
        </div>
      </div>
    </Card>
  );
}

export default StatsCard;
