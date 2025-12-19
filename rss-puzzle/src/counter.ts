export default function setupCounter(element: HTMLButtonElement): void {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    const elem = element;
    elem.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
