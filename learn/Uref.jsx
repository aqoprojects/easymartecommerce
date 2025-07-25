import React, { useEffect, useRef, useState } from 'react'

const Uref = () => {
  // const inputRef = useRef();
  const [count, setCount] = useState(0)
  // const onClick = ()=>{
  //   inputRef.current.value = 'Pedro'
  // }
  const previousCount = useRef(0)


  useEffect(()=>{
    previousCount.current = count
  }, [count])
  return (
    <>
      {/* <input ref={inputRef} type="text" />
      <button onClick={onClick}> Console log</button> */}
      <p>Count: {count}</p>
      <p>Previous count: {previousCount.current}</p>
      <button onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
    </>
  )
}

export default Uref