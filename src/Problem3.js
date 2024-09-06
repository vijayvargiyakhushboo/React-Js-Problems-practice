//Filter data based on entered name in input box
import { useState } from "react"
const Problem3 = ({listItem}) => {
    const [data, setData] = useState(listItem)
    const getInputData = (e) => {
        let filter = listItem.filter((item) => (item.name).toLowerCase() === (e.target.value).toLowerCase())
        setData(filter)
    }
    const click = (val) => {
        alert(val)
    }
    
return <>
        <input type='text' onChange={ getInputData} />
        <ul>
            {data.map(item => (<li>{item.name}  <button onClick={()=>click(item.id)}>Click</button></li>))}
        </ul>
       
</>
}
export default Problem3;