import { useCallback, useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = useCallback(
    (button: string) => {
      const operators: string[] = ["+", "-", "/", "*"];

      if (button === "c" || button === "C") {
        setResult("");
        return;
      } else if (button === "Enter" || button === "=") {
        setResult(eval(result.replace(/\b0+(\d+)/g, "$1")));
        return;
      } else if (button === "Backspace") {
        setResult(result.slice(0, -1));
        return;
      } else if (operators.includes(button) && /[+\-/*]$/.test(result)) {
        return;
      }

      setResult((previousResult) => previousResult + button);
    },
    [result]
  );

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      event.preventDefault();
      const key = event.key;

      const allKeys: string[] = [
        "+",
        "-",
        "/",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "c",
        "C",
        "Backspace",
        "*",
        "Enter",
        "=",
      ];

      if (allKeys.includes(key)) {
        clickHandler(key);
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [clickHandler]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-amber-50/30 rounded-4xl px-4 py-4">
        <ul className="grid grid-cols-4 gap-4">
          <li className="result">{result}</li>
          <li className="col-span-2">
            <button onClick={() => clickHandler("c")}>c</button>
          </li>
          <li>
            <button onClick={() => clickHandler("Backspace")}>&larr;</button>
          </li>
          <li>
            <button className="operator" onClick={() => clickHandler("/")}>
              /
            </button>
          </li>
          <li>
            <button onClick={() => clickHandler("7")}>7</button>
          </li>
          <li>
            <button onClick={() => clickHandler("8")}>8</button>
          </li>
          <li>
            <button onClick={() => clickHandler("9")}>9</button>
          </li>
          <li>
            <button className="operator" onClick={() => clickHandler("*")}>
              *
            </button>
          </li>
          <li>
            <button onClick={() => clickHandler("4")}>4</button>
          </li>
          <li>
            <button onClick={() => clickHandler("5")}>5</button>
          </li>
          <li>
            <button onClick={() => clickHandler("6")}>6</button>
          </li>
          <li>
            <button className="operator" onClick={() => clickHandler("-")}>
              -
            </button>
          </li>
          <li>
            <button onClick={() => clickHandler("1")}>1</button>
          </li>
          <li>
            <button onClick={() => clickHandler("2")}>2</button>
          </li>
          <li>
            <button onClick={() => clickHandler("3")}>3</button>
          </li>
          <li>
            <button className="operator" onClick={() => clickHandler("+")}>
              +
            </button>
          </li>
          <li className="col-span-3">
            <button onClick={() => clickHandler("0")}>0</button>
          </li>
          <li>
            <button className="operator" onClick={() => clickHandler("=")}>
              =
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
