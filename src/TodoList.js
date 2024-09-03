import React from 'react'


const TodoList = ({taskList,handleDelete,handleEdit}) => {
   const deleteTask = (id)=> {
    handleDelete(id)
   }
   const editTask = (id)=> {
    handleEdit(id)
   }
  return <>
  <div className='todo-list'>
        {
        taskList.map((task) => <div className='todo-item'><strong>{task.id}</strong><hr/>
        <span>{task.task}</span> <button onClick={()=> editTask(task.id)}>Edit</button> <button onClick={()=> deleteTask(task.id)}>Delete</button>
        </div>
         
        )}
        </div>
    
    </>
}

export default TodoList
