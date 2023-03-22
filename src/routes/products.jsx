import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { arrayRemove, collection, getDocs } from "firebase/firestore"; 
import { database } from '../firebase/firebase';

function Products() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    //const querySnapshot = await getDocs(collection(database, "products"));
    //querySnapshot.forEach((doc) => {
      //products.push(doc.data());
      //console.log(`${doc.id} => ${doc.data()}`);
    //});
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
        <div className="grid grid-cols-3 gap-3" >
            {Array(5).fill().map(()=> <ProductCard></ProductCard> )}
            
        </div>
    </>
  )
}

export default Products
