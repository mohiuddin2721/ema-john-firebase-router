import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h3>Our all products {products.length}</h3>
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
            }
        </div>
    );
};

export default Shop;