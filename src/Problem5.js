//This problem is to add data into array and show using list and the item should get added from text field.
import { useState ,useRef} from "react";
import Child from "./Child";

const Problem5 = () => {
    
    const [val, setItem] = useState('');
    const [data, setData] = useState([]);
    const inputRef = useRef(null)
    const getItem = () => {
      setData([...data, val])
    }
    const setFocus =()=> {
        inputRef.current.focus()
        console.log(inputRef.current.value)

    }

 return (
    <div>
    <input type="text" onChange={(e)=> setItem(e.target.value)} />
    <button onClick={getItem} >Add</button>
    <h2>Entered Item: {val}</h2>
        <ul>
            {
            data.map((item) => {
            return <li>{item}</li>
            })
            }
        </ul>
        <h5>Below is the forwardRef Example:</h5>
        <Child ref={inputRef} />
        <button onClick={setFocus}>setFocus</button>
 </div>
 )

}
export default Problem5;