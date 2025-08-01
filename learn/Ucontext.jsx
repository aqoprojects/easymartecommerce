import { createContext, useState , useContext} from "react";

const GlobalStateContext = createContext(null);


const Ucontext = () => {
  const [isToggle, setIsToggle] = useState(false)
  return (
    
    <GlobalStateContext.Provider value={{isToggle, setIsToggle}}>
      <div>
        <h1>Parent Components</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  )
}

export default Ucontext

const ChildToggle = ()=> {
  const {setIsToggle} =useContext(GlobalStateContext)
  return (
    <div>
      <button onClick={()=> setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  )
}

const ChildDisplay = ()=> {
  const {isToggle}  = useContext(GlobalStateContext)
  return (
    <div>
      <p>Current State: {isToggle ? "ON":"OFF"}</p>

    </div>
  )
}