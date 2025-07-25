import React, { useLayoutEffect, useRef, useState } from 'react'

const Ulayout = () => {
  const [boxWidth, setBoxWidth] = useState(0)
  const boxRef = useRef();

  useLayoutEffect(()=>{
    if(boxRef.current){
      setBoxWidth(boxRef.current.offsetWidth)
    }
  })

  return (
    <div>
      <div ref={boxRef} style={{
        width: "50%",
        height: "100px",
        backgroundColor: 'lightblue',
      }}>Resize me!
      </div>
      <p>The box width is: {boxWidth}px</p>
    </div>
  )
}

export default Ulayout