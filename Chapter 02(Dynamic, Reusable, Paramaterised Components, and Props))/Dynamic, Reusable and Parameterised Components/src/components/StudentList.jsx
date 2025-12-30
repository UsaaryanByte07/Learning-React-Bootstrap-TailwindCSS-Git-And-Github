const StudentList = () => {
  let studentArray = [
    "Ram",
    "Syham",
    "Ajit",
    "Kuldeep",
    "Krissh",
    "Mohan",
    "Rohan",
    "Sunita",
    "Samyak",
    "Jaideep",
    "Sakshi",
  ];

  return (
    <ol>
      {studentArray.map((student, index) =>
        <li key={student}>{student}</li>
      )}
    </ol>
  );
};

export default StudentList;
