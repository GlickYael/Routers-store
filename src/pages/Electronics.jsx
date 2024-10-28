import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import styles from '../styles/productsStyle.module.css';

function Electronics() {
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(response => response.json())
        .then(data => setElectronics(data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.prod_area}>
            {electronics.map(
                (product) => (
                    <div key={product.id} className={styles.product}>
                        <Product product={product}/>
                    </div>
                )
            )}
        </div>
    );
}

export default Electronics;
