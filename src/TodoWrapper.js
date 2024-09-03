import { useState } from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList";
import { v4 as uuidv4} from 'uuid';
import './TodoWrapper.css'
import TodoEdit from "./TodoEdit";

const TodoWrapper = () => {
    const [data,setData] = useState([])
    const [selected, setSelected] = useState([])
    const [editFlag, setEditFlag] = useState(false)
    const [filterData,setFilterData] = useState([])
    const toDo = (toDo) => {
      //  alert(toDo)
        setData([...data,{'id':uuidv4(),'task':toDo}])

    }
    const handleDelete = (taskId)=> {
        alert("id:"+taskId)
        setData( data.filter((item) => item.id !== taskId) )
    }
    const handleEdit = (taskId)=> {
        alert("id:"+taskId)
        setSelected( data.filter((item) => item.id === taskId) )
        setEditFlag(true)
    }
    const updateTask = (edited_val) => {
  console.log("updateTask: ",selected)
  setFilterData( [...filterData ,data.filter((item) => item.id !== selected[0].id )] )
 console.log(filterData)
 setData([...filterData,{'id':selected[0].id,'task':edited_val}])
 setEditFlag(false)

    }
    if(editFlag)
    return <TodoEdit selected={selected} editTodo={updateTask} />

    return <>
    <TodoForm toDo={toDo}/>
    <TodoList taskList={data} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
}
export default TodoWrapper;