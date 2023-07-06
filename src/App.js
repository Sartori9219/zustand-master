import { useCounterStore } from "./store";

function App() {
  const counter = useCounterStore(state => state.counter);
  const increaseCounter = useCounterStore(state => state.increaseCounter);
  const decreaseCounter = useCounterStore(state => state.decreaseCounter);
  return (
    <>
      <h1>
        {`Counter: ${counter}`}
      </h1>
      <button onClick={increaseCounter}>
        Increase Counter
      </button>
      <button onClick={decreaseCounter}>
        Decrease Counter
      </button>
    </>
  );
}

export default App;
