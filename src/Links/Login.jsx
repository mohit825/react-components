import { useNavigate } from "react-router-dom";
import useBoolean from "../hooks/useBoolean";

const Login = () => {
  const navigate = useNavigate();
  const { value: boolean, setTrue, setFalse } = useBoolean();
  console.log(boolean, "ram");
  const onClickHandler = () => {
    navigate("/accordion");
    // console.log("button clicked");
  };

  return (
    <div>
      Login Page
      <button onClick={onClickHandler}>Login</button>
      <br />
      <p>Use Boolean Hook.</p>
      {boolean ? <span>User logged in</span> : <span>User not logged in</span>}
      <br />
      <button onClick={() => setTrue()}>Make it true</button>
      <br />
      <button onClick={() => setFalse()}>Make it False</button>
    </div>
  );
};

export default Login;
