import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(0);

  function increase(number, updateFunction, previousValue) {
    console.log(counter);
    updateFunction(previousValue + number); // increase the previous value by something
    // setCounter(counter + number)
    // setCounter2(counter2 + number)
  }

  function decrease() {
    console.log(counter);
    // Update the counter by 1
    setCounter(counter - 1);
  }

  let increaseBy10 = () => {
    console.log(counter2);
    setCounter2(counter2 + 10);
  };

  function decreaseBy10() {
    console.log(counter2);
    // Update the counter by 1
    setCounter2(counter2 - 10);
  }

  // Counter: 0
  return (
    <div className="App">
      <header className="App-header">
        <p>Counter: {counter}</p>
        {/* <button onClick={() => increase()}>Increase</button> */}
        <button onClick={() => increase(1, setCounter, counter)}>
          Increase
        </button>
        <button onClick={decrease}>Decrease</button>

        <p>Counter: {counter2}</p>
        <button onClick={() => increase(10, setCounter2, counter2)}>
          Increase + 10
        </button>
        <button onClick={decreaseBy10}>Decrease + 10</button>
      </header>
    </div>
  );
}

// export default App;

function Counter({ counter, updateFunction }) {
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => updateFunction(counter + 1)}>Increase</button>
      <button onClick={() => updateFunction(counter - 1)}>Decrease</button>
    </>
  );
}

function CounterWithoutProps() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </>
  );
}

function App2() {
  // let [counter, setCounter] = useState(0);
  // let [counter2, setCounter2] = useState(0);
  // let [counter3, setCounter3] = useState(0);
  // let [counter4, setCounter4] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter counter={counter} updateFunction={setCounter} />
        <Counter counter={counter2} updateFunction={setCounter2} />
        <Counter counter={counter3} updateFunction={setCounter3} />
        <Counter counter={counter4} updateFunction={setCounter4} /> */}

        <CounterWithoutProps />
        <CounterWithoutProps />
        <CounterWithoutProps />
        <CounterWithoutProps />

        {/* <p>Total {counter + counter2 + counter3 + counter4}</p> */}
      </header>
    </div>
  );
}

export default App2;
