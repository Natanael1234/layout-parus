import React from "react";
import "./radio-group.scss";

export default class RadioGroup extends React.Component {
  render() {
    return (
      <fieldset id={this.props.id} className="radio-group">
        {this.props.options.map((option) => {
          return (
            <div className="radio-option">
              <span>
                <input
                  type="radio"
                  value={option.value}
                  name={option.name}
                  className="radio-input"
                />
              </span>
              <span>
                <label for={option.name} className="radio-label font font_14">
                  {option.label}
                </label>
              </span>
            </div>
          );
        })}
      </fieldset>
    );
  }
}
