import { useState } from "react";
import "./login-form.css";

const LoginForm = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  // show password
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <header>
          <h2>Sign In</h2>
          <div className="icon">
            <i className="fa-sharp fa-solid fa-robot"></i>
          </div>
        </header>

        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <i class="fa-sharp fa-solid fa-user"></i>
          <input type="text" className="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} required="required" />
          <span>username</span>
        </div>
        <div className="form-group">
          <i class="fa-sharp fa-solid fa-envelope"></i>
          <input type="email" className="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} required="required" />
          <span>email</span>
        </div>
        <div className="form-group">
          <i class="fa-sharp fa-solid fa-key"></i>
          <input type={show ? "text" : "password"} className="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} required="required" />
          <span>password</span>
          <div className="show-password">
            <i class={`fa-sharp fa-solid fa-eye ${show === true ? "d-none" : "d-flex"}`} onClick={handleShow}></i>
            <i class={`fa-sharp fa-solid fa-eye-slash ${show === true ? "d-flex" : "d-none"}`} onClick={handleShow}></i>
          </div>
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
};

export default LoginForm;
