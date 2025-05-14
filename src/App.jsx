import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      tittle: "Terminar mini curso",
      description: "Terminar o vídeo do cursinho de React",
      isCompleted: false,
    },
    {
      id: 2,
      tittle: "Terminar mini curso",
      description: "Terminar o vídeo do cursinho de React",
      isCompleted: false,
    },
    {
      id: 3,
      tittle: "Terminar mini curso",
      description: "Terminar o vídeo do cursinho de React",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskID) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskID) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskClickDelete(taskID) {
    const newTasks = tasks.filter((task) => task.id !== taskID);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <div className="div1">
        <h1 className="tittle">Gerenciador de tarefas</h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskClickDelete={onTaskClickDelete}
        />
      </div>
    </div>
  );
}

export default App;
