import { useState } from "react"

const TodoEdit = ({selected, editTodo}) => {
    console.log("TodoEdit: "+selected[0].id)
    const [value,setValue]= useState(selected[0].task)
    
    const updateTodo = (e)=> {
        e.preventDefault()
        console.log("val: "+value)
       editTodo(value)
    }
    return <>
    <h3>TODO EDIT</h3>
    <><div className='todo-item'><strong>{selected[0].id}</strong><hr/>
    <form onSubmit={updateTodo}>
        <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
        <button type="submit" >Update</button> 
        </form>
        </div></>
    </>
    
}
export default TodoEdit