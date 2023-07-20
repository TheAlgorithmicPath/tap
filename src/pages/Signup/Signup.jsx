import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";

import "./Signup.css";
import { register } from "../../actions/user";
import signupImg from "../../media/images/login-signup/sign-up.png";

const Signup = () => {
  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.set("email", email);
    formData.set("phone", phone);
    formData.set("password", password);
    formData.set("userId", userId);
    dispatch(register(formData));
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div>
      <div className="signup">
        <img
          className="signup__img"
          // src="https://res.cloudinary.com/saienterprises/image/upload/v1681553375/signup_1_1_oouwf9.jpg"
          src={signupImg}
          alt="signup"
          style={{ width: "30%", height: "50%" }}
        />
        <form onSubmit={handleSubmit}>
          <div className="signup__content">
            <h3 className="signup__title">SIGN UP</h3>

            <div className="signup__content__form">
              <TextField
                sx={{
                  width: { xs: 300, sm: 400, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                label="Name"
              />
              <TextField
                sx={{
                  width: { xs: 300, sm: 400, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
                type="email"
                id="email"
                name="email"
                pattern=".+@globex\.com"
                size="30"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email"
              />
              <TextField
                sx={{
                  width: { xs: 300, sm: 400, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
                id="userId"
                name="userId"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                label="User Id"
              />
              <TextField
                sx={{
                  width: { xs: 300, sm: 400, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                label="Phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                minLength="8"
                type="password"
              />
            </div>

            <div className="signup__content__bottom">
              <button type="submit" className="actionsignup">
                Submit
              </button>
              <p className="para__small">
                Already have an Account - <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
