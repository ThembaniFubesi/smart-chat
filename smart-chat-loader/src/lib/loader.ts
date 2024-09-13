import { ApiModel, ConfigModel } from "./models";

export function loaderInit() {
  const button = document.getElementById("smartChatWidget");

  let config: ConfigModel;
  try {
    config = JSON.parse(JSON.stringify(button?.dataset)) as ConfigModel;
  } catch (e) {
    throw new Error(e as string);
  }

  if (config == null) {
    throw new Error("Could not load the widget configuration");
  }

  function loadWidget() {
    const widget = document.createElement("div");
    const widgetStyle = widget.style;
    widgetStyle.display = "none";
    widgetStyle.boxSizing = "border-box";
    widgetStyle.width = "500px";
    widgetStyle.height = "600px";
    widgetStyle.position = "fixed";
    widgetStyle.bottom = "10px";
    widgetStyle.right = "10px";
    widgetStyle.maxWidth = "100%";

    const iframe = document.createElement("iframe");
    const iframeStyle = iframe.style;
    iframeStyle.boxSizing = "borderBox";
    iframeStyle.position = "absolute";
    iframeStyle.right = "0";
    iframeStyle.bottom = "0";
    iframeStyle.width = "100%";
    iframeStyle.height = "100%";
    iframeStyle.border = "0";
    iframeStyle.margin = "0";
    iframeStyle.padding = "0";

    widget.appendChild(iframe);

    const api: ApiModel = {
      show() {
        widgetStyle.display = "block";
      },
      hide() {
        widgetStyle.display = "none";
      },
      toggle() {
        const display = window.getComputedStyle(widget, null).display;
        widgetStyle.display = display === "none" ? "block" : "none";
      },
      onHide() {},
    };

    iframe.addEventListener("load", () => {
      window.addEventListener("getWidgetApi", () => {
        const event = new CustomEvent("widgetApi", { detail: api });
        window.dispatchEvent(event);
      });

      window.addEventListener("message", (event) => {
        if (event.origin !== config.host) {
          return;
        }

        if (event.data === "hide") {
          api.hide();
          api.onHide();
        }
      });

      console.log(iframe.contentWindow);

      iframe.contentWindow?.postMessage(config, config.host!);
    });

    const widgetUrl = config.host!;

    iframe.src = widgetUrl;

    document.body.appendChild(widget);
  }

  if (document.readyState == "complete") {
    loadWidget();
  } else {
    document.addEventListener("readystatechange", () => {
      if (document.readyState == "complete") {
        loadWidget();
      }
    });
  }
}
