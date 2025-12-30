const StudentList = (props) => {
  if(!props.studentArray){
    return <p>No Students.</p>
  }
  return (
    <ol>
      {props.studentArray.map((student, index) =>
        <li key={student}>{student}</li>
      )}
    </ol>
  );
};

export default StudentList;
