import { useState } from "react";
import { registerUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Register button clicked");
  console.log("Email:", email);
  console.log("Password:", password);

  try {
    const res = await registerUser({
      email,
      password,
    });

    console.log("API Response:", res);

    alert("Registration Successful");

    navigate("/");
  } catch (err) {
  console.error("FULL ERROR:", err);

  console.log("Response:", err.response);
  console.log("Status:", err.response?.status);
  console.log("Data:", err.response?.data);
  console.log("Message:", err.message);

  alert("Registration Failed");
}
};

  return (
    <div className="auth-container">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Register
        </button>

        <p>
          Already registered?
          <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;