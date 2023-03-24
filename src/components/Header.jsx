import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Header() {
    const myCartContext = useContext(CartContext);

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
                    <Link className="mx-8" to={'/submit'}>Cart : {myCartContext.myCart.length}</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header
