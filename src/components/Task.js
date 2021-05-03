import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "task--reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="task__text">
        <h3>{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <FaTimes onClick={() => onDelete(task.id)} className="task__icon" />
    </div>
  );
};

export default Task;
