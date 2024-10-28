import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import styles from '../styles/productsStyle.module.css'

function Jeweleries() {
    const [jeweleries, setJeweleries ] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(response => response.json())
        .then(data => setJeweleries(data))
        .catch(error => console.log(error))
    },[]);
    return (
        <div className={styles.prod_area}>
            {jeweleries.map(
                (product) => (
                    <div key={product.id} className={styles.product}>
                        <Product product={product}/>
                    </div>
                )
            )}
        </div>
    )
}

export default Jeweleries
