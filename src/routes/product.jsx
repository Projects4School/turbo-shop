import { useState } from 'react'
import ProductCard from '../components/ProductCard'

function Product() {
  const [count, setCount] = useState(0)

    return (
        <>
            <div className="grid grid-cols-3 gap-3">
                <h1>Product</h1>
                <img src='https://www.lesitedelasneaker.com/wp-content/images/2022/08/nike-air-max-plus-unity-dz4509-001-3.jpeg'/>
            </div>
        </>
    )
}

export default Product
