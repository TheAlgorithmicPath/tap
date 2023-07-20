import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { login } from "../../actions/user";
import loginImg from "../../media/images/login-signup/enter.png";

const Login = () => {
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (user) {
        navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="login">
      <img
        // src="https://res.cloudinary.com/saienterprises/image/upload/v1681553375/login_1_rrb4xr.jpg"
        src={loginImg}
        className="login__img"
        alt="login"
        style={{ width: "30%", height: "50%" }}
      />
      <form onSubmit={handleSubmit}>
        <div className="login__content">
          <h3>LOG IN</h3>
          <div className="login__content__form">
            <TextField
              sx={{
                width: { xs: 300, sm: 400, md: 400 },
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              id="email"
              name="email"
              size="30"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="User Id or Email"
            />
            <TextField
              sx={{
                width: { xs: 300, sm: 400, md: 400 },
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              id="password"
              name="password"
              label="Password"
              minLength="6"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login__content__bottom">
              <button className="actionLogin">Login</button>
              <p className="login__txt">
                Don't have an Account - <Link to="/signup">SignUp</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
