import { useState } from 'react'
import ClockBox from './components/clockbox'
import Topbar from './components/TopBar'
function App() {
  const [display, setDisplay] = useState(false)
  function handleMouseLeave() {
    if (display) {
      setTimeout(() => {
        setDisplay(false)
      }, 2000)
    }
  }
  return (
    <div className="w-full" onMouseOver={() => setDisplay(true)} onMouseLeave={handleMouseLeave}>
      <Topbar display={display} />
      <ClockBox display={display} />
    </div>
  )
}

export default App
