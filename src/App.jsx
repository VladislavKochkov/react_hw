import { useState } from 'react'
import instLogo from './assets/inst.svg'
import youtubeLogo from '/youtube.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

     return (
    <>
      <div>
        <a href="https://www.youtube.com/c/VladimirShaitan" target="_blank">
          <img src={youtubeLogo} className="logo" alt="YouTube logo" />
        </a>
        <a href="https://www.instagram.com/vlad.sha/" target="_blank">
          <img src={instLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>YouTube + Instagram</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          your click {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
