import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import { DangerButton, SuccessButton } from "./components/Buttons";
import DynamicComponent from "./components/DynamicComponent";
import StudentList from "./components/StudentList";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <>
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <StudentList />
      <Heading />
      <Paragraph />
      <DangerButton />
      <SuccessButton />
      <StudentList />
      <DynamicComponent />
    </>
  );
}

export default App;
