import { Button } from "react-bootstrap";
import Router from "next/router";
const logout = () => {
  return (
    <div className="container mt-3">
      <h1 className="mb-3">Logout</h1>
      <Button
        variant="primary"
        onClick={() => {
          localStorage.removeItem("x-auth-token");
          Router.push("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default logout;
