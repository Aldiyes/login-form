import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    username: "Aldiyes Paskalis Birta",
    useremail: "aldiyespaskalisbirta@gmail.com",
    userpassword: "aldiyes17032002",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (details.name === adminUser.username && details.email === adminUser.useremail && details.password === adminUser.userpassword) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError(alert("Salah akun GOBLOKK"));
    }
  };

  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
