import React from "react";
import SignForm from "./SignForm";
import * as auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Login(props){
  const navigate = useNavigate();

  const handleSubmit = (e, formValue, setFormValue) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password){
      return;
    }
    e.target.lastChild.textContent = "Вход..."
    auth.authorize(formValue.email, formValue.password)
      .then((res) => {
        if (res.token){
          setFormValue({email:"", password:""})
          props.handleLogin();
          navigate('/', {replace: true});
        }
        e.target.lastChild.textContent = "Войти";
      })
      .catch(err => console.log(err));
  }

  return (
    <SignForm title="Вход" buttonText="Войти" onSubmit={handleSubmit} />
  )
}

export default Login;