import { useState } from "react"

const Prob2 = () => {
    const [item, setItem] = useState('');
    const [arr, setArr] = useState([])

    const addData = () => {
       setArr([...arr, item]) 
    }

    return <>
    <input type="text" onChange ={( (e) => setItem(e.target.value)) } />
    <button onClick={addData}> Add</button>
    <span>{arr.length}</span>
    <ul>
    {arr.map((ele) => 
       <li>{ele}</li>
    )}
    </ul>
    </>
    

}
export default Prob2