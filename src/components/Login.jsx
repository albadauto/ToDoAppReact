import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Login.css";
import api from "../Api";
const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  function onsubmit(e){
    e.preventDefault();
    api.post('/isValidPassword', login).then((res) => {
        if (res.data.isLogged){
            console.log("Logado");
        }else{
            console.log(res.data.message)
        }
    })
  }
  return (
    <>
      <NavBar />;
      <div className="container-login">
        
        <form onSubmit={onsubmit} method="post">
          Login: <br />
          <input type="text" name="email" id="" className="input-text" value={login.email} onChange={(e) => setLogin({...login, email: e.target.value})}/>
          <br />
          Senha: <br />
          <input type="password" name="senha" id="" className="input-text" value={login.senha} onChange={(e) => setLogin({...login, senha: e.target.value})}/>
          <br />
          <br />
          <button className="btn btn-primary" type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
};

export default Login;
