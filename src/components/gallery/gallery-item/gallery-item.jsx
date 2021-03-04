import React from "react";
import "./gallery-item.scss";

export default class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.props,
    };
  }

  render() {
    const { item } = this.state;
    return (
      <div
        className={
          "item " +
          (item.hideOnMobile ? " hide-on-mobile " : "") +
          (item.hideOnMail ? " hide-on-mail " : "")
        }
      >
        <div className="image"></div>
        <div className="nome font font_16">{item.nomeProduto}</div>
        <div className="description font font_12">{item.descricaoProduto}</div>
        <div className="de font font_14">De R${item.valorDe}</div>
        <div className="por font font_18 font_bold">Por R${item.valorPor}</div>
        <div className="parcelas font font_12">
          ou {item.qtParcelas}x de R${item.valorParcela}
        </div>
        <button className="comprar font font_20">Comprar</button>
      </div>
    );
  }
}
