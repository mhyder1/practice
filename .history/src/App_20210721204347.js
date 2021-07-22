import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
function App() {
  const [name, setName] = useState('Jeff')
  const [age, setAge] = useState(20)
  const [colors, setColors] = useState(['red', 'blue', 'green', 'yellow'])
  const [count, setCount] = useState(0)

  const number = 5
  return (
    <main>
      <Header colors={colors}/>
      <h2>{count}</h2>
      <br />
      <button>increment</button>
      <button>decrement</button>
      <Footer userName={name} age={age} setName={setName}/>
    </main>
  );
}

export default App;
