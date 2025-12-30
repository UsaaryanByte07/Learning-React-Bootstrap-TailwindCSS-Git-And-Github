import "./Buttons.css";

const Button = ({btnType, btnText, handler}) => {
  if(btnType == "success"){
    return <button className="green-btn" onClick={handler}>{btnText}</button>;
  }else if(btnType == "danger"){
    return <button className="red-btn" onClick={handler}>{btnText}</button>;
  } else{
    return <button className="blue-btn" onClick={handler}>{btnText}</button>
  }
}

export default Button;