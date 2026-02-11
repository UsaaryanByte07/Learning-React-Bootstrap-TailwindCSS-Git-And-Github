import { useState } from "react";
import "./App.css";

function App() {
  const [countVal, setCount] = useState(0);

  const onClickHandler = () => {
    setCount(() => countVal + 1);
    //     Direct Update Button: Will likely only increment by 1 instead of 3, because countVal is the same for all three calls.
    // Functional Update Button: Will correctly increment by 3, because each call gets the result of the previous one.

    /*
Use Functional Update (prev => prev + 1): Whenever your new state depends on the old state (incrementing, toggling boolean, appending to array).
Use Direct Value (newValue): When you are replacing the state completely and don't care what it was before (e.g., resetting a form, setting data from an API). 
*/
  };

  return (
    <div>
      <p>{countVal}</p>
      <button onClick={onClickHandler}>Click Me</button>
    </div>
  );
}
export default App;
