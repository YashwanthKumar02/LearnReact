import { useMemo, useState } from 'react'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])  //caches input value and output value so that it isn't called again and again only called when number changes
  //const doubleNumber = slowFunction(number)

  const themeStyle = {
    backgroundColor: dark? 'black' : 'white',
    color: dark? 'white':'black'
  }

  return (
    <>
      <input type="number" 
        value = {number}
        onChange={(e)=>setNumber(parseInt(e.target.value))}
      />
      <button onClick={()=>{setDark(prevDark  =>  !prevDark)}}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}


function slowFunction(num) {
  console.log('calling slow function')
  for (let i = 0; i < 1000000000; i++) {}  
  return num*2
}

export default App
