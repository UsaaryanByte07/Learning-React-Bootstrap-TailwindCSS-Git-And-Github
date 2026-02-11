import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContextProvider";

export const Header = () => {

  const {theme} = useContext(ThemeContext);

  return (
      <h1 className={`m-2 p-2 rounded ${theme == 'light' ? "bg-blue-400 text-white" : "bg-black text-green-400"}`}>This website is in {`${theme == 'light' ? "Light": "Dark"}`}</h1>
  );
};
