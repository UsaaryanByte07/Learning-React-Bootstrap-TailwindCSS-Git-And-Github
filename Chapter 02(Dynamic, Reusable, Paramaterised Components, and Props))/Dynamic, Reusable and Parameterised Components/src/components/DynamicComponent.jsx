const DynamicComponent = () => {
  let Student = "Aryan Upadhyay";
  let marks = [10, 70, 88, 79, 40, 99, 95, 87, 66];

  let calcpercent = (marks) => {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  };

  return (
    <p>
      {Student} has Scored {Math.round(calcpercent(marks))}%.
    </p>
  );
};

export default DynamicComponent;
