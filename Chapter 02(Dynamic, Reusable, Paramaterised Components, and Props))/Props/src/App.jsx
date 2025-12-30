import './App.css'
import Title from './components/Title'
import Button from './components/Buttons'
import StudentList from './components/StudentList'

function App() {
  let studentArray1 = [
    "Ram",
    "Syham",
    "Ajit",
    "Kuldeep",
    "Krissh",
    "Mohan",
  ];
  let studentArray2 = ["Rohan",
    "Sunita",
    "Samyak",
    "Jaideep",
    "Sakshi",
  ];
  const saveHandler = () => {
    console.log('clickMeHandler clicked');
  };
  const deleteHandler = () => {
    console.log('deleteHandler clicked');
  };
  const sendHandler = () => {
    console.log('sendHandler clicked');
  };

  return (
    <>
    <Title titleText="Learing Props"/>
    <Title titleText="Learning React"/>
    <Title titleText="Learning Mern Stack"/>
    <Button btnType="success" btnText="Save" handler={saveHandler}/>
    <Button btnType="danger" btnText="Delete" handler={deleteHandler}/>
    <Button btnText="Send" handler={sendHandler}/>
    <StudentList studentArray={studentArray1}/>
    <StudentList studentArray={studentArray2}/>
    </>
  )
}

export default App
