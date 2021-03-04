import React from "react";
import GalleryItem from "../gallery-item/gallery-item";
import "./gallery-grid.scss";

export default class GalleryGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div className="gallery-grid error">Error:{error.message}</div>;
    } else if (!isLoaded) {
      return <div className="gallery-grid loading">Carregando...</div>;
    } else {
      return (
        <span>
          <div className="gallery-grid">
            {items.map((item) => {
              return (
                <GalleryItem id={item.id} props={item} />
                );
            })}
          </div>

          <div className="button-mais-produtos-container">
            <button
              type="button"
              className={'button-mais-produtos button font font_20' + (this.props.mail ? ' ver-mais-mail' : '')}>
              { !this.props.mail  ? 'Ainda mais produtos aqui!' : 'Tem muito mais aqui! Vem ver!' }
            </button>
          </div>
        </span>
      );
    }
  }

  componentDidMount() {
    this.requestDummyData(!this.props.mail ? 8 : 2).then(
      (items) => this.setState({ isLoaded: true, items }),
      (error) => this.setState({ isLoaded: true, error })
    );
  }

  async requestDummyData(amount) {
    let items = [];
    for (let i = 1; i <= (amount || 8); i++) {
      let item = {
        id: i,
        nomeProduto: "Nome do produto",
        descricaoProduto:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id porttitor leo, non venenatis massa.",
        valorDe: "23,99",
        valorPor: "19,99",
        qtParcelas: 2,
        valorParcela: "9,99",
        hideOnMobile: i > 4,
        hideOnMail: i > 2,
      };
      items.push(item);
    }
    return items;
  }
}
