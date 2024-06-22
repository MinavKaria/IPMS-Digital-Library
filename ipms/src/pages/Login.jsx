import React from 'react'
import { useState } from 'react'

function Login() {
    const [number, setNumber] = useState(0)
  return (
   <>
    <h1>{number}</h1>
    <button onClick={() => setNumber(5)}>Click Me</button>
 
   </>
  )
}

export default Login