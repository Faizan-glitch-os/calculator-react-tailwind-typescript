function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="font-montserrat max-w-md bg-amber-50/50 rounded-lg px-8 py-4">
        <ul className="grid grid-cols-4 gap-4">
          <li className="h-20 col-span-4 !justify-end items-center hover:!scale-100 hover:!rounded-xl">
            results
          </li>
          <li className="col-span-2">c</li>
          <li>&larr;</li>
          <li className="operator">/</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li className="operator">x</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li className="operator">-</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li className="operator">+</li>
          <li className="col-span-3">0</li>
          <li className="operator">=</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
