import './Inputs.css'

const Input = (props) => {
  if (props.inputType == "text") {
    return (
      <div class="form-floating mb-3 task-input">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder={props.inputText}
        />
        <label for="floatingInput">{props.inputText}</label>
      </div>
    );
  }
  if (props.inputType == "date") {
    return <div class="form-floating mb-3 task-input">
        <input
          type="date"
          class="form-control"
          id="floatingInput"
          placeholder={props.inputText}
        />
        <label for="floatingInput">{props.inputText}</label>
      </div>
  }
};

export default Input;
