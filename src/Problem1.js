//This problem is for showing table with fetched data from API and should work with the pagination.
import { useState,useEffect} from 'react'
export default function Problem1() {
    const [apiData,setData] = useState([]);
    const [buttonNext,setButtonNext] = useState(0);
    const [isLoading,setIsLoading]= useState(true);
    const fetchData = async () => {
        const result = await  fetch(buttonNext>0 ? ('https://swapi.dev/api/starships/?page='+buttonNext) : 'https://swapi.dev/api/starships');
        const data= await result.json();
        setData(data.results)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData()
     },[buttonNext])
    return (
            <>
                {isLoading && <div>Loading ...</div>}
                <table>
                    <tr><th>Name</th>
                    <th>Model</th>
                    <th>Cost Credit</th></tr>
                    {apiData.map((item)=> (<tr><td>{item.name}</td>
                    <td>{item.model}</td>
                    <td>{item.cost_in_credits}</td></tr>))}
                </table>
                <button onClick={() => setButtonNext((preValue) => preValue - 1)}>Prev</button>
                <button onClick={() => setButtonNext((preValue) => preValue + 1)}>Next</button> 
            </>
            )
}