//This problem is to add data into array and show using list and the item should get added from text field.
import { useState } from "react";

const Prob1 = () => {
    
    const [val, setItem] = useState('');
    const [data, setData] = useState([]);
    const getItem = () => {
      //console.log(val)
      setData([...data, val])
     // setItem('')
     console.log("data: ",data)
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

        <input type="text" value={val} onChange={(e)=>setItem(e.target.value)} />
        <button onClick={getData} >Add</button>
 </div>
 )

}
export default Prob1;