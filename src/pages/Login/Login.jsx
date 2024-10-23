import { useRef } from "react";
import { Form } from "react-bootstrap";
import { verifyUser } from "../../data/users";

import "./Login.css";

function Login({ setToken, setRole }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
      <Form.Label htmlFor="username"><b>Username</b></Form.Label>
      <Form.Control
        type="text"
        id="username"
        style={{ textAlign: "center" }}
        placeholder="user"
        ref={userRef}
      />
      <Form.Label htmlFor="password"><b>Password</b></Form.Label>
      <Form.Control
        type="password"
        id="password"
        style={{ textAlign: "center" }}
        placeholder="pass"
        ref={passRef}
      />
      <button className="btn btn-primary mt-3" 
        onClick={() => {
          const user = userRef.current.value.trim();
          const pass = passRef.current.value.trim();
          userRef.current.value = "";
          passRef.current.value = "";
          
          const userInfo = verifyUser(user, pass);
          if (userInfo == null) {
            alert("Username or password is incorrect!");
            userRef.current.focus();
          } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;