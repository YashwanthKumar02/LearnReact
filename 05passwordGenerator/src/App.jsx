import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [symbolAllowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() //optional selection
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str+="0123456789"
    if(symbolAllowed) str+="+=_-)(*&^%$#@!`~<>?/.,;:]}[{"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass+=str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, symbolAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, symbolAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
         />
         <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2 justify-center'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange = {()=>{setNumberAllowed(prev => !prev)}}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
            defaultChecked={symbolAllowed}
            id="symbolInput"
            onChange = {()=>{setSymbolAllowed(prev => !prev)}}
          />
          <label htmlFor="symbolInput">Symbols</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
