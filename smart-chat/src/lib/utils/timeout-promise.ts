export function timeoutPromise(duration: number = 500) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
