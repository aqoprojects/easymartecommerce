import React, { useDeferredValue, useState, useTransition } from 'react'

const Utransition = () => {
  const [query, setQuery] = useState("");
  // const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition()
 
  const items = Array.from({ length: 10000}, (_, i)=> `item ${i - 1}`)

  // const handleFilter = (e)=>{
  //   const value = e.target.value;
  //   setQuery(value)

  //   // startTransition(()=> {
  //   // const filtered = items.filter((item) => item.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  //   // setFilteredItems(filtered)
  //   // })
    
  
  // }

    const deferredQuery = useDeferredValue(query)
    const filteredItems = items.filter((item) => item.toLowerCase().includes(deferredQuery.toLowerCase()))

  return (
    <div>
      <input 
        type="text"
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        placeholder='Search items...'
        />

        {query !== deferredQuery && <p>Loading</p>}

        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>
  )
}

export default Utransition