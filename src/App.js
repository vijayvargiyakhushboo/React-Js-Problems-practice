
import './App.css';
//import Problem1 from './Problem1';
// import Problem2 from './Problem2';
// import Counter from './HOC/Counter';
// import Problem3 from './Problem3';
// import Problem4 from './Problem4';
import Problem5 from './Problem5';


function App() {
  const listItem = [{name:'khushboo',
    designation: 'SSE',
    id:1
  },
  {name:'Rahul',
    designation: 'TL',
    id:3
  }]
  return (
    <div className="App">
      {/* <Problem1/> */}
      {/* <Problem2 /> */}
    
      {/* <Problem3 listItem={listItem} /> */}
      {/* <Problem4 /> */}
      <Problem5 />
    </div>
  );
}
export default App;