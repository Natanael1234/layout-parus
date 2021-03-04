import React from "react";
import ColetaDadosDescription from "./coleta-dados-description/coleta-dados-description";
import ColetaDadosForm from "./coleta-dados-form/coleta-dados-form";
import "./coleta-dados.scss";

export default class ColetaDados extends React.Component {
  render() {
    return (
      <div className="coleta-dados">
        <ColetaDadosDescription/>
        <ColetaDadosForm />
      </div>
    );
  }
}
