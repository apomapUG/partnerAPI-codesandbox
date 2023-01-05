// @ts-nocheck
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import { fetchLocation, fetchTasks } from "./actions/actions";

import { MantineProvider } from "@mantine/core";
import Layout from "./container/Layout";

export default function App() {
  // * States
  const [tasks, setTasks] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {
    loadTasks(`apomap.730a16d75bf9e60bff95312e`);
    // loadTasks(`${process.env.REACT_APP_USER_TOKEN}`);
  }, []);

  // * API Calls
  const loadTasks = async (inputText: string) => {
    try {
      const tasksCall = await fetchTasks(inputText);
      setTasks(tasksCall.tasks);
      loadLocation(inputText);
    } catch (error) {
      console.log("Error Here:", error);
    }
  };
  const loadLocation = async (inputText: string) => {
    try {
      const locationCall = await fetchLocation(inputText);
      setLocation(locationCall.location);
    } catch (error) {
      console.log("Error Location:", error);
    }
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      {tasks.length !== 0 || location !== null ? (
        <div className="flex flex-col justify-center items-center gap-4 h-screen p-12">
          <Layout tasks={tasks} location={location} />
        </div>
      ) : (
        "LOADING..."
      )}
    </MantineProvider>
  );
}

//"apomap.c24436ebe51816482c1ddfc5"
