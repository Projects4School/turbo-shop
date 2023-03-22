import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <div className="container mx-auto p-4 pt-28">
        <Outlet/>
      </div>
    </div>
  )
}

export default Root
