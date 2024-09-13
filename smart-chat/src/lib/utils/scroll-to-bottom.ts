export function scrollToBottom(element: HTMLElement) {
  element.scroll({ top: element.scrollHeight, behavior: "smooth" });
}
