import React from "react";

const Chatbot = () => {
  (function (d, m) {
    var kommunicateSettings = {
      appId: "24f2f520ff40102560f33400ed0e2d3f",
      popupWidget: true,
      automaticChatOpenOnNavigation: true,
    };
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0];
    h.appendChild(s);
    window.kommunicate = m;
    m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
};

export default Chatbot;
