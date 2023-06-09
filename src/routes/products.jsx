import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { arrayRemove, collection, getDocs } from "firebase/firestore"; 
import { database } from '../firebase/firebase';

function Products() {
	const [products, setProducts] = useState([])

	const fetchProducts = async () => {
		const querySnapshot = await getDocs(collection(database, "products"));
		const productsArray = [];
		querySnapshot.forEach((doc) => {
			productsArray.push({
				id: doc.id,
				...doc.data()
			});
		});
		setProducts(productsArray);
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3" >
				{products.map((elem)=> <ProductCard product={elem} key={elem.id}/> )}
			</div>
		</>
	)
}

export default Products
