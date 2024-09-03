//Create 1 button for Increment counter and also create one settimeout which increment counter in every second and with this the button should also do its job.
import { useState,useEffect } from "react"
const Problem2 = () => {
    const [counter,setCounter] = useState(0);
    useEffect(() => {
        setTimeout(() => setCounter((preCounter)=> preCounter + 1 ),1000)
      },[counter])

return <>
<span>Counter : {counter}</span>
<button onClick={()=> setCounter((preValue)=> preValue + 1)}>Increment</button>
</>
}
export default Problem2