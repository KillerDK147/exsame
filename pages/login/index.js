import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { login } from "../../service/authService";
const Login = () => {
  let [Account, setAccount] = useState({
    Email: "",
    Password: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const acc = await login(Account.Email, Account.Password);
      console.log(acc);
      if (acc) {
        window.location.href = "/";
      }
    } catch (e) {
      console.log(e);
    }
  };
  let handleChange = (e) => {
    setAccount({
      ...Account,
      [e.target.name]: e.target.value,
    });
    console.log(Account);
  };
  return (
    <Form className="container mt-3" onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="string"
          placeholder="Enter email"
          name="Email"
          value={Account.Email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="Password"
          value={Account.Password}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
