import React from "react";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div className="p-5">
      <h1 className="display-3">Olá, seja bem vindo ao Module Federation</h1>
      <hr className="my-2" />
      <p>Este componente é de outro app</p>
      <p className="lead">
        <Button color="primary">Botão</Button>
      </p>
    </div>
  );
};

export default Home;
