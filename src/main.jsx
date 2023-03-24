import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Products from './routes/products'
import Product from './routes/product'
import Submit from './routes/submit'
import CartContextProvider from './context/CartContext'
import Cart from './routes/cart'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/submit",
				element: <Submit/>
			},
			{
				path: "/products",
				element: <Products/>
			},
			{
				path: "/products/:productId",
				element: <Product/>
			},
			{
				path: "/cart",
				element: <Cart/>
			}
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>,
)
