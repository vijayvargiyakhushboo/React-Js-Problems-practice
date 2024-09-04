
import './App.css';
//import Problem1 from './Problem1';
import Problem2 from './Problem2';
import Counter from './HOC/Counter';
import Problem3 from './Problem3';

function App() {
  const listItem = [{name:'khushboo',
    designation: 'SSE',
  },
  {name:'Rahul',
    designation: 'TL',
  }]
  return (
    <div className="App">
      {/* <Problem1/> */}
      {/* <Problem2 /> */}
      <Counter/>
      <Problem3 listItem={listItem} />
    </div>
  );
}
export default App;