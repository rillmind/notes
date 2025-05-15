import { ChevronRightIcon, TrashIcon } from "lucide-react";
import "./Tasks.css";

function Tasks({ tasks, onTaskClick, onTaskClickDelete }) {
  return (
    <ul className="fundo">
      {tasks.map((task) => (
        <li key={task.id} className="tarefa">
          <button
            onClick={() => onTaskClick(task.id)}
            className={task.isCompleted ? `line-throught` : `buttonTitle`}
          >
            {task.isCompleted ? `>` + task.title : task.title}
          </button>
          <button className="icon">
            <ChevronRightIcon />
          </button>
          <button onClick={() => onTaskClickDelete(task.id)} className="icon">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
