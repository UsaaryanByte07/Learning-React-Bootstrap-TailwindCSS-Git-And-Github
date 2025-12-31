import "./AddTodo.css";
import Button from "./Buttons.jsx";
import  Input from "./Inputs.jsx"

const AddTodo = (props) => {
  return (
    <div className="task-add-container">
        {props.inputBoxesArray.map((inputBox) => {
            return <Input inputType={inputBox.inputType} inputText={inputBox.inputText} />
        })}
      <Button btnType="success-btn" btnText="Add" />
    </div>
  );
};

export default AddTodo;
