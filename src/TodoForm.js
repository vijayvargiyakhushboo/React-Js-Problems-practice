import { useState } from "react"

const TodoForm = ({toDo}) => {
    const [todo,setTodo]= useState();
    const submitHandle = (e)=> {
       e.preventDefault()
       if(todo)
        toDo(todo)
        setTodo('')
    }
    

    return <>
      <form onSubmit={submitHandle} >
        <input type="text" id="task" value={todo} onChange={(e)=> setTodo(e.target.value)}/><button>Add</button>
      </form>
    </>
}
export default TodoForm;