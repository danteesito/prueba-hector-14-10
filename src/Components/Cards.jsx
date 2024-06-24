import React from 'react';

function Cards({ items }) {
    return (
        <div className="cards">
            {items.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Cards;
