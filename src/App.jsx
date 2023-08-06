import { useState } from 'react'
import HeaderContainer from './container/Header/HeaderContainer'
import NavBar from './container/NavBar/NavBar'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <HeaderContainer/>
        <NavBar/>
      </div>
  
    </>
  )
}

export default App
