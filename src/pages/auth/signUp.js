import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../api/requests";

const SignUp = () => {
    const [user,setUser] = useState({
        fullName:'',
        phoneNumber:'',
        password:'',
    });
    const inputHandler = (e)=>{
         setUser({...user,[e.target.name]:e.target.value})
    }
    const formHandler = async(e)=>{
         e.preventDefault();
         try {
            const response = await signUp(user);
         } catch (err) {
            console.log(err);
         }
     }
  return (
    <section className="main_section">
      <div className="login_wrapper">
        <div className="login_card">
          <h1>Sign up </h1>
          <form  onSubmit={formHandler} className="login_form">
          <div className="form_group">
              <label className="login_label" htmlFor="fullname">
                Full name
              </label>
              <input
                className="input"
                type="text"
                name="fullName"
                id="fullname"
                onChange={inputHandler}
              />
            </div>
            <div className="form_group">
              <label className="login_label" htmlFor="phoneNumber">
                Phone
              </label>
              <input
                className="input"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={inputHandler}
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
                onChange={inputHandler}
              />
            </div>
            <div className="form_group_last">
              <p className="login_text">
                Already have a account ?
                <Link className="login_link" to={"/"}>
                  Log in
                </Link>
              </p>
              <button className="btn_primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
