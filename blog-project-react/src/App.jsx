import './App.css';
import './assets/index.css';

function App() {
  // const [count, setCount] = useState(0)
  const todoTitle = "hello world";
  const todoDescription = "My First React + Vite Application";
  const h2Style = {
    color: "green",
    fontSize: "2rem"
  }

  function CardComponent(){
    return (
      <div className='card'>
        <h3>Card Title 1</h3>
        <p>Card Description</p>
      </div>
    )
  }
  return (
    <>
      <h1 style={{color: "red", fontSize: "3rem"}}>My Project :)</h1>
      <h2 style={h2Style}>{todoTitle}</h2>
      <p className='sub-title'>{todoDescription}</p>
      <hr/>
      <h2>Card Design</h2>
      <div className='card'>
        <h3>Card Title</h3>
        <p>Card Description</p>
      </div>
      <CardComponent/>
    </>
  )
}

export default App
