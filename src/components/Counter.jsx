import { useState } from "preact/hooks";

export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div class="flex gap-2">
        <button
          class="rounded-md bg-red-500 w-5 h-5 flex justify-center items-center"
          onClick={subtract}
        >
          -
        </button>
        <pre>{count}</pre>
        <button
          class="rounded-md bg-red-500 w-5 h-5 flex justify-center items-center"
          onClick={add}
        >
          +
        </button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}
