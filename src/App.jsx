import { useState } from 'react'
import './App.css'
import Modal from './conponents/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Modal />
    </div>
  )
}

export default App
