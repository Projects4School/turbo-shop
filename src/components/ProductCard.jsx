import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

function ProductCard({ product }) {
    const [count, setCount] = useState(0)

    const myCartContext = useContext(CartContext);

    const handleAddToCart = (myProduct) => {
        myCartContext.setMyCart((currentCart) => {
            return [
                ...currentCart,
                myProduct
            ];
        })
    }

    return (
        <div className="rounded border hover:shadow-md transition-all bg-white flex flex-col justify-between">
            <img className="max-w-full" src={product.image} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <p>{product.price}€</p>
                <button onClick={() => handleAddToCart(product)} className="rounded bg-black text-white p-1 w-full">Add to cart</button>
            </div>

        </div>
    )
}

export default ProductCard
