import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import api from "../Api";
import { loggedSelector } from "../redux/userSlice";

const Main = () => {
    const logged = useSelector(loggedSelector);
    const history = useHistory();
    const session = localStorage.getItem('session')
    if (!session) return history.goBack();
    function handleTest() {
        api.get('/sla').then((res) => {
            console.log(res)
        })
    }
  return (
    <>
      
      <h1>Pagina Main</h1>
      <button onClick={handleTest}>Enviar</button>
    </>
  );
};

export default Main;
