import React from "react";
import "./coleta-dados-description.scss";

export default class ColetaDadosDescription extends React.Component {
  render() {
    return (
      <div className="coleta-dados-description">
        <div className="title font font_20">
          Ajude o algoritimo a ser mais certeiro
        </div>
        <div className="content font font_12">
          <p className="content font font_12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit ante nisl, a commodo eros sagittis non. Nulla congue purus
            tellus, non viverra nulla vehicula vitae. Praesent enim magna,
            dignissim et maximus non, consectetur in dui. Nulla in viverra
            lacus. Sed lacinia placerat ipsum. Sed in lobortis metus. Vestibulum
            sed lobortis purus, id iaculis lacus. Maecenas non scelerisque
            metus.
          </p>
          <p className="content font font_1">
            Mauris faucibus sed ligula non mattis. Suspendisse nec mollis elit.
            Cras blandit dictum est nec vulputate. Vivamus ac placerat tellus.
            Maecenas eleifend nisl sed erat aliquam, vitae suscipit ante congue.
            Suspendisse scelerisque pretium diam sed laoreet. Sed sit amet
            condimentum nisi, eget ultrices nibh.
          </p>
        </div>
      </div>
    );
  }
}
