import "./App.css";
import TaskList from "./components/TaskList";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <div className="app-container">
        <AddTodo
          inputBoxesArray={[
            { inputType: "text", inputText: "Enter the Todo" },
            { inputType: "date", inputText: "Enter Date" },
          ]}
        />
        <TaskList
          taskCardArray={[
            { id: 1, taskName: "Play Cricket", taskDate: "29-12-2025" },
            { id: 2, taskName: "Do College Homework", taskDate: "31-12-2025" },
          ]}
        />
      </div>
    </>
  );
}

export default App;
