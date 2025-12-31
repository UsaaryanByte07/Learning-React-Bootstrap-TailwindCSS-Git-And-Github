import TaskCard from "./TaskCard.jsx";
import './TaskList.css';

const TaskList = (props) => {
    return <div className="column">
        {props.taskCardArray.map((taskCard) => {
            return <TaskCard taskName={taskCard.taskName} taskDate={taskCard.taskDate} />;
        })}
    </div>;
}

export default TaskList;