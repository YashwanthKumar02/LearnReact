import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    // setCounter(count + 1)
    // setCounter(count + 1)
    // setCounter(count + 1)
    // setCounter(count + 1) // 4 times answer will be 16 (15+1)
    //repeated calls to setCounter(count + 1) will not work as expected
    // because the count value is not updated immediately after the call to setCounter.
    // Instead, the value is updated asynchronously and batched together.
    // This is to improve performance and avoid unnecessary re-renders.

    setCounter((prevCount) => prevCount + 1)
    setCounter((prevCount) => prevCount + 1)
    setCounter((prevCount) => prevCount + 1)
    setCounter((prevCount) => prevCount + 1) // 4 times answer will be 19 (15+4)

    // setCounter also accepts a callback function that receives the previous state as an argument
    // and returns the new state. This is useful when you need to calculate the new state based on the previous state.
    //what this callback does is it takes the previous count and adds 1 to it and returns the new value.
    //The new value is then passed to the setCounter function to update the state.
    
  }

  return (
    <>
      <h1>Tricky Counter</h1>
      <h3>counter: {counter}</h3>
      <button onClick={addValue}>Increment</button>
    </>
  )
}

export default App
