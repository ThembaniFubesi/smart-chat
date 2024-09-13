import { ApiModel } from "./models";

export function widgetApi() {
  return new Promise<ApiModel>((resolve, _) => {
    let timeoutId: number;

    const getApi = () => {
      const event = new Event("getWidgetApi");
      timeoutId = window.setTimeout(getApi, 1000);
      window.dispatchEvent(event);
    };

    const onWidgetApi = (event: Event) => {
      const api = (event as CustomEvent).detail;
      window.clearTimeout(timeoutId);
      resolve(api);
    };

    window.addEventListener("widgetApi", onWidgetApi, { once: true });
    getApi();
  });
}
