import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./main-layout.scss";

export default class MainLayout extends React.Component {
  render() {
    return (
      <span>
        <div className="main-layout">
          <Header />
          <div className="content">{this.props.children}</div>
          <Footer />
        </div>
      </span>
    );
  }
}
