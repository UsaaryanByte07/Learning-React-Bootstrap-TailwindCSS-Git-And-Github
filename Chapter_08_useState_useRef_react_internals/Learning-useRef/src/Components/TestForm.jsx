import { useRef, useState } from "react";

const TestForm = () => {
  //useRef is usually used to keep reference of the DOM Element.. But this doesn't mean the only purpose of useRef is to keep Reference of the DOM Element it can keep reference of anything
  console.log("Painting UI");

  const [firstNamVal, setFirstName] = useState();

  const firstNameChangeHandler = () => {
    setFirstName(event.target.value);
  };

  const clicks = useRef(0);
  const firstName = useRef();
  const lastName = useRef();
  const dob = useRef();

  const onSubmitHandler = (e) => {
    // console.log(e);
    e.preventDefault();
    console.log("Button Clicked");
    console.log(firstName.current.value);
    console.log(lastName.current.value);
    console.log(dob.current.value);
  };
  return (
    <div>
      useState Value: {firstNamVal}, useRef value: {clicks.current}
      <form action="/submit-data" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="firstName"
          ref={firstName}
          placeholder="Enter First Name"
          onKeyDown={firstNameChangeHandler}
        />
        <br />
        <input
          type="text"
          name="lastName"
          ref={lastName}
          placeholder="Enter Last Name"
        />
        <br />
        <label htmlFor="dob">DOB</label>
        <input type="date" name="dob" id="dob" ref={dob} />
        <br />
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            clicks.current++;
          }}
        />
      </form>
    </div>
  );
};

export default TestForm;
