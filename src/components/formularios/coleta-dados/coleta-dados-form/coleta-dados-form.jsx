import React from "react";
import Form from "../../../form/form";
import InputField from "../../../form/input-field/input-field";
import RadioGroup from "../../../form/radio-group/radio-group";
import "./coleta-dados-form.scss";

export default class ColetaDados extends React.Component {
  render() {
    return (
      <div className="coleta-dados-form">
        <Form>
          <InputField label="Seu nome:" id="nome" name="nome" type="text" />
          <InputField label="E-mail" id="email" name="email" type="email" />
          <InputField label="CPF:" id="cpf" name="cpf" type="text" />

          <RadioGroup
            id="sexo"
            label="Sexo"
            options={[
              { value: "m", name: "masculino", label: "Masculino" },
              { value: "f", name: "feminino", label: "Feminino" },
            ]}
          />

          <button type="button" className="button font font_20">
            Enviar
          </button>
        </Form>
      </div>
    );
  }
}
