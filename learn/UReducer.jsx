import React, { useReducer, useState } from 'react'

const UReducer = () => {
  const reducer = (state, action)=>{
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1}
    
      case 'decrement':
        return {count: state.count - 1}
    
      case 'double':
        return {count: state.count * 1}
      default:
        console.log('No action type')
    }
  }
  
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment"})}>+</button>
      <button onClick={()=> dispatch({type: "decrement"})} >-</button>
      <button onClick={()=> dispatch({type: "double"})} >*</button>
    </div>
  )
}

export default UReducer