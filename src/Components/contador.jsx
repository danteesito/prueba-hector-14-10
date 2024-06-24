import React, { useState, useEffect } from 'react';
import Cards from './Cards';

function Contador() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    const Aumentar = () => {
        if (count < 50) {
            setCount(count + 1);
        }
    };

    const Disminuir = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        if (count > -1) {
            setItems(products.slice(0, count));
        }
    }, [count, products]);

    return (
        <>
            <div className="contador">
                <button className='but' onClick={Aumentar}>
                    Aumentar
                </button>
                <button className='but' onClick={Disminuir}>
                    Disminuir
                </button>
                <h2>Productos: {count}</h2>
                <Cards items={items} />
            </div>
        </>
    );
}

export default Contador;
