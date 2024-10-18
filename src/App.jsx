import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'



function App() {
  function handleClick(){
    alert('button click')
  }
  const handleClick2 = ()=>{
    alert('button 2 click')
  }

  const addToFive =(num)=>{
    console.log(num)
    alert(num+5);
  }

  return (
    <>
      <h3>React core Concepts - 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert("click -3")}}>click 3</button>
      <button onClick={()=>addToFive(3)}>click 4</button>
    </>
  )
}

export default App
