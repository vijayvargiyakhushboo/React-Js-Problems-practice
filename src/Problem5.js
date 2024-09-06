//This problem is to add data into array and show using list and the item should get added from text field.
import { useState } from "react";

const Problem5 = () => {
    
    const [val, setItem] = useState('');
    const [data, setData] = useState([]);
    const getItem = () => {
      setData([...data, val])
    }

    const getData = () => {
        setData([...data, val])
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
 </div>
 )

}
export default Problem5;