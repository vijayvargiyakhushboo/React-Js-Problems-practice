import { useRef, useState } from 'react';
const Todo = () => {
    let defaultData = [{'title': 'Todays TODO','description': 'hello world i am having task to do'},
    {'title': 'tomorow TODO','description': 'hello world i am having task to do by tom'}]
    const [data,setData] = useState(defaultData)
    const title = useRef()
    const description = useRef()
    //const navigate = useNavigate()
    const [flag, setFlag] = useState(true)
    const [editTitle,setEditTitle] = useState();
    const [editDescription,setEditDescription] = useState()
    const[editedDescription, setEditedDescription] = useState()
    const [ind,setInd] = useState();

    const AddTodo= () => {
        console.log(title)
        let arr = {'title': title.current.value,'description': description.current.value}
        setData([...data,arr])
    }
    const deleteHandle = (val,i) => {
        console.log("delete: ",i)
        //  setData(data.toSpliced(i,1))
        let res = data.filter((item) => item.title !== 'kv')
        setData(res)
    }
    const handleEdit = (editData,index) => {
        // navigate('/editData'+editData)
        setInd(index);
        setFlag(false);
        setEditTitle(editData.title);
        setEditDescription(editData.description);
    }
    const updateData = (itemIndex) => {
        alert(ind)
        setData(data.toSpliced(ind,1,{'title': editTitle,'description':editedDescription}))
    }
    if(flag)
    return <>
<div>
    <label>Title:</label>
    <input type="text" id="title" ref={title}/><br/>
    <label>Description:</label>
    <textarea id="description" ref={description} />
    <button onClick={AddTodo}>Add</button></div>
    <div className='todo-container'>
        {data.map((item,index) => <div className="todoCard">
            <div ><strong>{item.title}</strong><hr/>
            <span>{item.description}</span>
            <div className='todo-container'>
            <button onClick={ () => handleEdit(item,index) }>Edit</button> <button onClick={()=>deleteHandle(item,index)}>Delete</button></div>
            </div>
        </div> )}
    </div>
    
    </>
    if(!flag)
    return <>
      <div className="todoCard">
        <div><strong>{editTitle}</strong><hr/>
        <textarea value={editDescription} rows={40} cols={40} />

        <div className='todo-container'>
            
        <button onClick={()=>updateData()}>Update</button> </div>
        </div>
    </div>
    </>
}
export default Todo 