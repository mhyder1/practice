import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
function App() {
  const [name, setName] = useState('Jeff')
  const [age, setAge] = useState(20)
  const number = 5
  return (
    <main>
      <Header />
      <Footer name={name}/>
    </main>
  );
}

export default App;
