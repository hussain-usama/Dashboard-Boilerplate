import { React, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

function Login() {
  const [UserEmail, setUserEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login_form">
      <Segment stacked>
        <div className="login_heading">
          <h2>Login to your account</h2>
        </div>
        <Form>
          <Form.Field>
            <label> Email Address</label>
            <input
              placeholder="Name"
              value={UserEmail}
              onChange={handleUserEmailChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="password"
              value={Password}
              onChange={handlePasswordChange}
              type="password"
            />
          </Form.Field>

          <Button type="submit" className="login-btn">
            Submit
          </Button>
        </Form>
      </Segment>
    </div>
  );
}

export default Login;
