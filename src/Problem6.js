import {useState,useRef} from 'react';
const Problem6 = ()=> {
    const [list, setList] = useState([])
    const [id,setId] = useState(0)
    const inputRef = useRef(null)
    const addToList = () => {
        const inputText = inputRef.current.value
        if(inputText){
            setId((preId)=> preId + 1)
            setList(()=> [...list , {id: id, text : inputText}])
            inputRef.current.value = "";
        }
    }
    const removeItem = (id)=> {
       setList(()=> list.filter((item)=> item.id !== id)) 
    }
    return <>
    <h4>ToDo List </h4>
    <input type="text" ref={inputRef} /><button onClick={addToList}>Add</button>
    <ul>
        {list.map(item => <li key={item.id}>{item.text}<button onClick={()=>removeItem(item.id)}>Delete</button></li>)}
        </ul>
    </>
}
export default Problem6