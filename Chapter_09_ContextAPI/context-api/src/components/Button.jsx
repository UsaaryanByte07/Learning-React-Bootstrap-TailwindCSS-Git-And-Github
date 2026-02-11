import { useContext } from "react";
import { ThemeContext} from "../store/ThemeContextProvider";

export const Button = () => {

  const {theme , toggleTheme} = useContext(ThemeContext);

  return (
      <button onClick={toggleTheme} className={`m-2 p-2 rounded ${theme == 'light' ? "bg-blue-400 text-white" : "bg-black text-green-400"}`}>{`Set the Theme to ${theme == 'light' ? 'Dark': 'light'}`}</button>
  );
};
