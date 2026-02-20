import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [mode, setMode] = useState("login"); // login | signup | forgot

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Grass & Grain</h2>

        {(mode === "login" || mode === "signup") && (
          <div className="tabs">
            <span
              className={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              Login
            </span>

            <span
              className={mode === "signup" ? "active" : ""}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </span>
          </div>
        )}

        {/* SIGNUP */}
        {mode === "signup" && (
          <>
            <input placeholder="Full Name" />
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <button>Create Account</button>

            <p className="small" onClick={() => setMode("login")}>
              Back to Login
            </p>
          </>
        )}

        {/* LOGIN */}
        {mode === "login" && (
          <>
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Login</button>

            <div className="links">
              <span onClick={() => setMode("forgot")}>Forgot password?</span>
            </div>
          </>
        )}

        {/* FORGOT PASSWORD */}
        {mode === "forgot" && (
          <>
            <input placeholder="Enter registered email" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirm New Password" />

            <button>Reset Password</button>

            <p className="small" onClick={() => setMode("login")}>
              Back to Login
            </p>
          </>
        )}

        <p className="demo">UI demo only — backend later</p>

      </div>
    </div>
  );
}
