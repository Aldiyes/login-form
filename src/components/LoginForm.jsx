import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <section className="login-form">
      <Container fluid="md" className="">
        <Row className="justify-content-center">
          <Col lg={6} xs={11}>
            <form onSubmit={submitHandler}>
              <div className="form-inner">
                <header>
                  <h2>Sign In</h2>
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-robot"></i>
                  </div>
                </header>

                {error !== "" ? <div className="error">{error}</div> : ""}

                <Row className="form-group">
                  <Col xs={12} className="group-item">
                    <i className="fa-sharp fa-solid fa-user"></i>
                    <input type="text" className="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} required="required" autoComplete="off" />
                    <span>username</span>
                  </Col>

                  <Col xs={12} className="group-item">
                    <i className="fa-sharp fa-solid fa-envelope"></i>
                    <input type="mail" className="mail" id="mail" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} required="required" autoComplete="off" />
                    <span>email</span>
                  </Col>

                  <Col xs={12} className="group-item">
                    <i className="fa-sharp fa-solid fa-key"></i>
                    <input type={show ? "text" : "password"} className="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} required="required" autoComplete="off" />
                    <span>password</span>
                    <div className="show-password">
                      <i className={`fa-sharp fa-solid fa-eye eye ${show === true ? "d-none" : "d-flex"}`} onClick={handleShow}></i>
                      <i className={`fa-sharp fa-solid fa-eye-slash eye ${show === true ? "d-flex" : "d-none"}`} onClick={handleShow}></i>
                    </div>
                  </Col>
                </Row>

                <input type="submit" value="LOGIN" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginForm;
