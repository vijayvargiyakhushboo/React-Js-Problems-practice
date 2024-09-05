// Implement a React component called Box.The Box should be clickable. Each click on a Box should result in creating and displaying a new Box as a child, directly beneath the clicked box.
// Each Box should be visually represented as a square on the screen, with a border to distinguish it. The exact size and border style are up to you, but they should be consistent across all boxes.
// Child boxes should be visually aligned directly beneath their parent, with a slight margin to distinguish between successive generations. There should be a clear visual hierarchy.
import {useState} from 'react';
const Problem4 = () => {
    const [arr,setArray] =useState([])
    const getClick = () =>{
        setArray((preValue)=> [...preValue,1])
    }

return <>
 <div style={{height:'25px',width:'25px',border:'1px solid'}} onClick={getClick}></div>
    {arr.map((item) => (
       <Problem4 />
    ))}
</>
}
export default Problem4;