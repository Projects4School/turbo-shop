import { useContext, useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { CartContext } from '../context/CartContext';

function Cart() {
    const [products, setProducts] = useState([])
    const myCartContext = useContext(CartContext);

    const handleEditQuantity = (qt, idProduct) => {
        let newCart = myCartContext.myCart;
        let productIdx = newCart.findIndex((p) => p.id == idProduct);
        if(productIdx > -1) {
            if(qt == -1) {
                newCart.splice(productIdx, 1);
            } else {
                newCart.push(newCart[productIdx]);
            }
        }
        myCartContext.setMyCart(newCart);
    }
  
    useEffect(() => {
        if(products.length <= 0 && myCartContext.myCart.length > 0) {
            let cart = [];
            myCartContext.myCart.forEach((elem) => {
                let productIdx = cart.findIndex((p) => p.id == elem.id);
                if(productIdx < 0) {
                    cart.push({
                        count: 1,
                        ...elem
                    });
                } else {
                    cart[productIdx].count++;
                }
            });
            setProducts(cart);
        }
    }, [myCartContext.myCart]);

    return (
        <>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="text-start">Name</th>
                        <th className="text-start">Price</th>
                        <th className="text-start">Quantity</th>
                        <th className="text-start">Total</th>
                        <th className="text-start">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}€</td>
                        <td>{product.count}</td>
                        <td>{product.price * product.count}€</td>
                        <td>
                            <button onClick={() => handleEditQuantity(-1, product.id)}>-</button>
                            <button onClick={() => handleEditQuantity(1, product.id)}>+</button>
                        </td>
                    </tr>)} 
                </tbody>
            </table>
        </>
    )
}

export default Cart