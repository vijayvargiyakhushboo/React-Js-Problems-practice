import { useState } from "react"

const Crud = () => {
    let data = [{
        'id':1,
        'name':'Khushboo'
    },
    {
        'id': 2,
        'name':'Rahul'
    }]

    const [list,setList] = useState(data)
    const [id,setId] = useState(data)
    const [name,setName] = useState(data)

    const handlerDelete = (i) => {
        console.log(i)
        let modifyList = list.toSpliced(i,1)
        setList(modifyList)
        console.log(list)
    }
 const AddRow = () =>{
 let val = {'id': id,'name': name}
  setList([...list, val])
  console.log("nl: ",list)
 }
    return <>
    <div>
<label>Id</label>
<input type="number" onChange={(e) => setId(e.target.value) } />

<label>Name</label>
<input type="text" onChange={(e) => setName(e.target.value) }/>
<button onClick={AddRow}>Add</button>

    </div>
    <table>
        <thead><tr><th>Id</th>
        <th>Name</th>
        <th>Action</th>
        </tr>
        </thead>

        <tbody>
            {list.map((item,index) => <tr><td key={item.id}>{item.id}</td>
            <td  key={item.name}>{item.name}</td>
            <td  key={index}><button onClick={() => handlerDelete(index)}>Delete</button></td></tr>)}
        </tbody>
    </table>
    </>
}

export default Crud