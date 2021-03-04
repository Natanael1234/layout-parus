import React from "react";
import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <svg
          className="shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <polygon fill="#707070" points="0,100 100,100 100,0 0,32.2" />
        </svg>
        <div className="footer-content">
          <div className="header-message">
            <p className="font font_14 light">Testando suas habilidades em HTML, CSS e JS</p>
            <p className="font font_14 light">Linx Impulse</p>
            <p className="font font_14 light">2019</p>
          </div>
        </div>
      </div>
    );
  }
}
