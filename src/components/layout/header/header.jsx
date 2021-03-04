import React from "react";
import "./header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <svg
          className="shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <polygon fill="#707070" points="0,0 100,0 100,100 0,66.16" />
        </svg>
        <div className="header-content">
          <div className="header-message">
            <p className="text-1 font font_18 light">uma seleção de produtos</p>
            <p className="text-2 font font_40 light">especial para você</p>
            <p className="text-3 font font_16 light">
              Todos os produtos desta lista foram selecionados a partir da sua
              navegação. Aproveite!
            </p>
          </div>
          <div className="header-buttons">
            <button className="button font font_16 light">Conheça a Linx</button>
            <button className="button font font_16 light">Ajude o algoritmo</button>
            <button className="button font font_16 light">Seus produtosLinx</button>
            <button className="button font font_16 light">Compartilhe</button>
          </div>
        </div>
      </div>
    );
  }
}
