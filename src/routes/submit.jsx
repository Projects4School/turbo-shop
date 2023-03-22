import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { arrayRemove, collection, getDocs } from "firebase/firestore"; 
import { database } from '../firebase/firebase';

function Submit() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")

    return (
        <>
            <h2 className="text-3xl">Submit a product</h2>
            <form>
                <label className="block my-2">Name :
                    <input className="border-2 rounded-lg ml-1 p-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label className="block my-2">Price :
                    <input className="border-2 rounded-lg ml-1 p-1" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </label>
                <label className="block my-2">Image :
                    <input className="border-2 rounded-lg ml-1 p-1" type="text" value={image} onChange={(e) => setImage(e.target.value)} required/>
                </label>
            </form>
        </>
    )
}

export default Submit
