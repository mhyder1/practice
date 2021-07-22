import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
function App() {
  const [name, setName] = useState('Jeff')

  return (
    <main>
      <Header />
      <Footer name={name}/>
    </main>
  );
}

export default App;
