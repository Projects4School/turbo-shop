import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { collection, addDoc } from "firebase/firestore"; 
import { database } from '../firebase/firebase';

function Submit() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const docRef = await addDoc(collection(database, "products"), {
            name,
            price,
            image
        });
        evt.target.reset()
    }

    return (
        <>
            <h2 className="text-3xl">Submit a product</h2>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label className="block my-2">Name :
                    <input className="border-2 rounded-lg ml-1 p-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label className="block my-2">Price :
                    <input className="border-2 rounded-lg ml-1 p-1" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </label>
                <label className="block my-2">Image :
                    <input className="border-2 rounded-lg ml-1 p-1" type="text" value={image} onChange={(e) => setImage(e.target.value)} required/>
                </label>
                <button className="border cursor-pointer border-black rounded-xl lg px-3 pr-2" type="submit">envoyer</button>
            </form>
        </>
    )
}

export default Submit
