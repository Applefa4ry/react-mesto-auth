import React from "react";
import SignForm from "./SignForm";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth"

function Register(props){
  const navigate = useNavigate();

  const handleSubmit = (e, formValue, setFormValue) => {
    e.preventDefault();
    e.target.lastChild.textContent = "Регистрация...";
    auth.register(formValue.email,formValue.password).then((res) => {
      if(res){
        props.openTooltip();
        navigate('/sign-in', {replace: true});
      }
    })
    .then(() => {
      setFormValue({email:"", password:""})
      props.handleRegister()
      props.openTooltip();
      e.target.lastChild.textContent = "Зарегистрироваться";
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <>
      <SignForm title="Регистрация" buttonText="Зарегистрироваться" onSubmit={handleSubmit} />
      <Link className="sign__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
    </>
  )
}

export default Register;