import React, { useEffect, useState } from 'react'

const UEffect = () => {
  const [data, setData] = useState([]);
  const [showwPedro, setShowPedro] = useState(false)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(
      (response) => response.json()
    )
    .then(
      (json)=> setData(json)
    )
  },[])


  useEffect(()=>{
    console.log("predro");
  }, [showwPedro])

  return (
    <div>
      <button onClick={()=> setShowPedro((prev) => !prev)}>Toggle</button>
      <h1>posts</h1>
      <ul>
        {
          data.map((item) => (
            <li>{item.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UEffect