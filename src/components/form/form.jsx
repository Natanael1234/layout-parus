import React from "react";
import "./form.scss";

export default class Form extends React.Component {
  render() {
    return <form className="form">{this.props.children}</form>;
  }
}
