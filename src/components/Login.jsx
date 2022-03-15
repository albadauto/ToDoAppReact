import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Login.css";
import api from "../Api";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  const [error, setError] = useState('');

  function onsubmit(e){
    e.preventDefault();
    api.post('/isValidPassword', login).then((res) => {
        if (res.data.isLogged){
          api.defaults.headers.authorization = res.data.token; //ADICIONA O HEADER AUTHORIZATION PARA GUARDAR O TOKEN
          history.push('/main');
        }else{
            history.push('/');
            setError(res.data.message);
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

          <label htmlFor="">{error}</label>
        </form>
      </div>
    </>
  );
};

export default Login;
