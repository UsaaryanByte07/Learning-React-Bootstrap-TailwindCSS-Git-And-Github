import "./TaskCard.css";
import Button from "./Buttons.jsx";

const TaskCard = (props) => {
  return (
      <div class="col-sm-6 mb-3 mb-sm-0 task-card">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.taskName}</h5>
            <p class="card-text">
              {props.taskDate}
            </p>
            <Button btnType="danger-btn" btnText="Delete"/>
          </div>
        </div>
      </div>
  );
};

export default TaskCard;
