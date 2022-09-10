import React, { useState } from "react";
import { logInRequest } from "../../api/requests";
import "./style.css";

const Login = ({setData}) => {
  const [user,setUser] = useState({
    phoneNumber:'',
    password:'',
});
const inputHandler = (e)=>{
     setUser({...user,[e.target.name]:e.target.value})
}
const formHandler = async(e)=>{
     e.preventDefault();
     try {
        const response = await logInRequest(user);
        localStorage.setItem('token',JSON.stringify(response.data.token))
        setData('success')
     } catch (err) {
        console.log(err);
     }
 }
  return (
    <section className="main_section">
      <div className="login_wrapper">
        <div className="login_card">
          <h1>Log in </h1>
          <form onSubmit={formHandler}  className="login_form">
            <div className="form_group">
              <label className="login_label" htmlFor="phone">
                Phone
              </label>
              <input
                className="input"
                type="text"
                name="phoneNumber"
                id="phone"
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
              <button className="btn_primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
