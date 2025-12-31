import "./Buttons.css";

const Button = (props) => {
  if (props.btnType == "success-btn") {
    return (
      <button type="button" class="btn btn-outline-success task-btn">
        {props.btnText}
      </button>
    );
  } else if (props.btnType == "danger-btn") {
    return (
      <button type="button" class="btn btn-outline-danger task-btn">
        {props.btnText}
      </button>
    );
  } else {
    return (
      <button type="button" class="btn btn-outline-info task-btn">
        {props.btnText}
      </button>
    );
  }
};

export default Button;
