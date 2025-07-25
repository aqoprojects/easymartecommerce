import React, { useState } from 'react'

const Ustate = () => {
  const [count,setCount] = useState(0)

  const IncreaseCount = ()=>{
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={IncreaseCount} >Increase C|ountdown</button>
    </div>
    
  )
}

export default Ustate