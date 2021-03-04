import React from "react";
import "./text-separator.scss";

export default class  TextSeparator extends React.Component {
  render() {
    return (
      <div className="text-separator">
        <div className="line"></div>
        <div className="text font font_bold font_20">{this.props.text}</div>
      </div>
    );
  }
}
