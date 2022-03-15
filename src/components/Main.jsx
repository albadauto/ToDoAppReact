import React from "react";
import api from "../Api";

const Main = () => {
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
