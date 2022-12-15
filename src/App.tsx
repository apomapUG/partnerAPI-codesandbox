import { useEffect, useState } from "react";
import { fetchTasks, fetchLocation } from "./actions/actions";
import SearchBox from "./components/searchbox/SearchBox";
import WelcomeText from "./components/welcome/WelcomeText";
import TaskBoard from "./containers/taskBoard/TaskBoard";
import TasksTable from "./containers/tasksTable/TasksTable";

function App() {
  // * States
  const [tasks, setTasks] = useState([]);
  const [location, setLocation] = useState({});

  // * API Calls
  const loadTasks = async (inputText: string) => {
    const tasksCall = await fetchTasks(inputText);
    setTasks(tasksCall.tasks);
    loadLocation(inputText);
  };
  const loadLocation = async (inputText: string) => {
    const locationCall = await fetchLocation(inputText);
    setLocation(locationCall.location);
  };

  return (
    <div className="container flex flex-col justify-between items-center h-screen p-12 gap-24">
      <SearchBox
        searchLabel="Enter Apotheke Token"
        buttonLabel="load tasks"
        handleClick={loadTasks}
      />
      <div className="flex flex-col flex-1 gap-12">
        {Object.entries(location).length !== 0 && (
          <WelcomeText location={location} />
        )}
        {tasks.length === 0 ? (
          <div>No tasks to show. Please enter your TOKEN!</div>
        ) : (
          <>
            <TaskBoard tasks={tasks} />
            <TasksTable tasks={tasks} location={location} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

// apomap.a7fba7b783f27bd1c69ecbef
// apomap.6f67452ac54214c985015c75
