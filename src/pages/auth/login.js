import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <section className="main_section">
      <div className="login_wrapper">
        <div className="login_card">
          <h1>Log in </h1>
          <form className="login_form">
            <div className="form_group">
              <label className="login_label" htmlFor="phoneNumber">
                Phone
              </label>
              <input
                className="input"
                type="text"
                name="phone"
                id="phoneNumber"
              />
            </div>
            <div className="form_group">
              <label className="login_label" htmlFor="password">
                Password
              </label>
              <input
                className="input"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="form_group_last">
              <p className="login_text">
                Don't have a account ? <Link className="login_link" to={"/sign-up"}>Sign up</Link>
              </p>
              <button className="btn_primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
