import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  function clickHandler(button: string) {
    if (button === "clearAll") {
      setResult("");
      return;
    }
    setResult((previousResult) => previousResult + button);
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md bg-amber-50/30 rounded-lg px-8 py-4">
        <ul className="grid grid-cols-4 gap-4">
          <li className="result">{result}</li>
          <li className="col-span-2">
            <button onClick={() => clickHandler("clearAll")}>c</button>
          </li>
          <li>
            <button onClick={() => clickHandler("clear")}>&larr;</button>
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
            <button className="operator" onClick={() => clickHandler("x")}>
              x
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
