import { useState } from "react";
import Router from "next/router";
import { createBruger } from "../../service/BrugerService";
const Reg = () => {
  let [Account, setAccount] = useState({
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    setAccount({
      ...Account,
      [e.target.name]: e.target.value,
    });
    console.log(Account);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const acc = await createBruger(Account);
      console.log(acc);
      if (acc) {
        Router.push("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handlesubmit} className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="Email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="Password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Reg;
