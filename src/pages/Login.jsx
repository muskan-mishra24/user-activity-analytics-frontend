import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
console.log("ENV URL =", import.meta.env.VITE_API_URL);
console.log("loginUser =", loginUser);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("STEP 1");

  try {
    console.log("STEP 2");

    console.log("loginUser =", loginUser);

    const payload = {
      email,
      password,
    };

    console.log("STEP 3", payload);

    const res = await loginUser(payload);

    console.log("STEP 4");
    console.log(res);

    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");
  } catch (err) {
    console.log("STEP ERROR");

    console.error(err);
    console.log("Message:", err.message);
    console.log("Response:", err.response);

    alert("Login Failed");
  }
};

  return (
    <div className="auth-container">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Login</h2>

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
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;