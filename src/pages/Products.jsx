import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import styles from '../styles/Products.module.css';

function Products({catagory}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        try {
            if(catagory!==undefined){
                localStorage.setItem('latestCategory',catagory);
            }
            const setTime = JSON.parse(localStorage.getItem(`${catagory}setTime`));
            if (!(setTime && (Date.now() - setTime) < 6000)) {
                fetch(`https://fakestoreapi.com/products/category/${catagory}`)
                    .then(response => response.json())
                    .then(data => {
                        setProducts(data);
                        localStorage.setItem(catagory, JSON.stringify(data));
                        localStorage.setItem(`${catagory}setTime`, JSON.stringify(Date.now()));
                    })
                    .catch(error => console.log(error));
            } else {
                const storedProducts = localStorage.getItem(catagory);
                if (storedProducts) setProducts(JSON.parse(storedProducts));
            }
        } catch (error) {
            console.log("Error handling localStorage operations", error);
        }
    }, [catagory]);
    

    return (
        <div className={styles.prod_area}>
            {products.map(
                (product) => (
                    <div key={product.id} className={styles.product}>
                        <Product product={product}/>
                    </div>
                )
            )}
        </div>
    );
}

export default Products;
