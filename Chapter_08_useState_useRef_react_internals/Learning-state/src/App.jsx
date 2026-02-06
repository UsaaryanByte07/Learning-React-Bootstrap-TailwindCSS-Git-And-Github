import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {
  console.log("Painting the App Component");

  let [studentArr, setStudentArr] = useState(["Aryan","Paawan","Salman","Rahul","Rohit","Abhisekh","Rohini","Sabar"]);
  // let studentArr = studentArrState[0];
  // const setStudentArr = studentArrState[1];
  console.log("The State Value is: ", studentArr)
  
  function updateList(event){
    if(event.key == "Enter"){
      studentArr = [...studentArr,event.target.value];
      setStudentArr(studentArr);
      event.target.value = "";
      console.log(studentArr)
    }
  }

  return (
    <>
    <List list={studentArr}/>
    <input type="text" onKeyDown={updateList} />
    </>
  )
}

export default App
