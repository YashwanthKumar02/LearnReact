import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-lg p-4 mb-4'>Tailwind test</h1>
      <Card username='ChaiAurCode' btnText='click me'/>
      <Card username='Yashwanth'/>
    </>
  )
}

export default App
