import compartilhar from "react";
import Form from "../../form/form";
import InputField from "../../form/input-field/input-field";
import "./compartilhar.scss";

export default class Compartilhar extends compartilhar.Component {
  render() {
    return (
      <div className="compartilhar">
        <div className="form-compartilhar-container">
          <div className="mensagem font font_16">
            Quer que seus amigos também ganhem a lista personalizada deles?
            Preencha agora!
          </div>
          <Form>
            <InputField
              label="Nome do seu amigo:"
              id="nome"
              name="nome"
              type="text"
            />
            <InputField
              className="input-email"
              label="E-mail:"
              id="email"
              name="email"
              type="email"
            />

            <div className="button-compartilhar-container">
              <button
                type="button"
                className="button-compartilhar font font_20"
              >
                Enviar agora
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
