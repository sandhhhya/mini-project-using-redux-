import React from 'react';
import { useSelector } from 'react-redux';


const Product = () => {
	const products = useSelector(state => state.products)
	return (
		<div>
			<h1> redux tutorial ok </h1>
			{
				products.map((product) => {
					return (<>
						<p key={product.id}> {product.id}</p>
						<p>{product.name}</p>
						<p>{product.price}</p>
					</>)
				})
			}
		</div>
	)
}

export default Product;