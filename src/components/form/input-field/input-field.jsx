import React from "react";
import "./input-field.scss";

export default class InputField extends React.Component {
  render() {
    return (
      <div className={'input-field form-field input-field-' + this.props.name}>
        <label className="font font_14">{this.props.label}</label>
        <input
          type={this.props.type}
          name={this.props.name}
          id={this.props.id}
        />
      </div>
    );
  }
}
