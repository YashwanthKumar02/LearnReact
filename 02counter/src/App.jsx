import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [limitExceed, setLimitExceed] = useState(false);
  const [limitMessage, setLimitMessage] = useState(null);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      if (limitExceed) {
        setLimitExceed(false); // Reset limitExceed state if counter is within limit
        setLimitMessage(null); // Remove the limit message
      }
    } else {
      if (!limitExceed) {
        setLimitExceed(true);
        setLimitMessage('Counter cannot exceed 20');
      }
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      if (limitExceed) {
        setLimitExceed(false); // Reset limitExceed state if counter is within limit
        setLimitMessage(null); // Remove the limit message
      }
    } else {
      if (!limitExceed) {
        setLimitExceed(true);
        setLimitMessage('Counter cannot be below 0');
      }
    }
  };

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      {limitMessage && <p className="limit">{limitMessage}</p>}
    </>
  );
}

export default App;
