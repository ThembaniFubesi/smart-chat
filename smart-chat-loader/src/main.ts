import { widgetApi, loaderInit } from "./lib";

(() => {
  const style = document.createElement("style");
  style.textContent = `
    #smartChatWidget.smart-chat-active {
        display: none;
    }

    @media screen and (max-width: 600px) {
      .smart-chat-widget-holder {
        width: 100% !important;
        height: 100% !important;
        max-height: none !important;
        left: 0 !important;
        right: 0 !important;
      }
    }
  `;

  document.body.appendChild(style);

  const button = document.getElementById("smartChatWidget");

  const buttonStyle = button?.style;
  if (buttonStyle != null) {
    buttonStyle.boxSizing = "border-box";
    buttonStyle.position = "fixed";
    buttonStyle.bottom = "10px";
    buttonStyle.right = "10px";
  }

  const activeButtonClass = "smart-chat-active";

  widgetApi().then((api) => {
    button?.addEventListener("click", () => {
      if (button.classList.contains(activeButtonClass)) {
        button.classList.remove(activeButtonClass);
        api.hide();
      } else {
        button.classList.add(activeButtonClass);
        api.show();
      }
    });

    api.onHide = () => {
      button?.classList.remove(activeButtonClass);
    };
  });

  loaderInit();
})();
