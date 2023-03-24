import { createContext, useState } from "react"

export const CartContext = createContext([])

export default function CartContextProvider({ children }) {
    const [myCart, setMyCart] = useState([])

    return <CartContext.Provider value={{myCart, setMyCart}}>
        {children}
    </CartContext.Provider>
}