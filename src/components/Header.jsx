import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="fixed shadow-xl w-full p-4 bg-white">
        <div className="container mx-auto flex items-center justify-between">
            <Link to={'/'} className="flex items-center">
                <img className="w-16" src="/logo.png" alt="" />
                <h1 className="text-xl">Turbo Shop</h1>
            </Link>
            <nav className="flex items-center">
                <Link className="mx-8" to={'/products'}>Products</Link>
                <Link className="mx-8" to={'/submit'}>Submit</Link>
            </nav>
        </div>
    </div>
  )
}

export default Header
