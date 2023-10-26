import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Players from './Players';
import Posts from './Posts';
import Users from './Users';

function App() {
  function handleClick(){
    alert('Button Clicked')
  }

  const handleClick2 = () => alert('Second Button Clicked');
const handleAddToFive = (num) => alert( num + 5);
  return (
    <>
      <h1>React Core Concept Part 2</h1>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Players></Players>
      <Counter></Counter>

      {/* <button onclick = "handleClick()">Click Me</button> */} {/* we do this in html */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Second</button>
      <button onClick={() => {alert('Third Button clicked')}}>Click Me Third</button>
      {/* This below one is vejailla */}
      <button onClick={() => handleAddToFive(3)}>GET RESULT</button>
    </>
  )
}

export default App
