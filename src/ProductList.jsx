import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css'; 
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    
    // Récupération du nombre total d'articles pour l'icône du panier
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Plantes d'intérieur",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: 15 },
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/pothos-3816940_1280.jpg", cost: 12 },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: 10 },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2014/12/10/11/27/peace-lily-562873_1280.jpg", cost: 18 },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283036_1280.jpg", cost: 14 },
                { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: 20 }
            ]
        },
        {
            category: "Plantes Aromatiques",
            plants: [
                { name: "Basilic", image: "https://cdn.pixabay.com/photo/2016/08/11/11/04/basil-1585349_1280.jpg", cost: 5 },
                { name: "Menthe", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126299_1280.jpg", cost: 4 },
                { name: "Romarin", image: "https://cdn.pixabay.com/photo/2014/10/22/16/38/rosemary-498305_1280.jpg", cost: 6 },
                { name: "Lavande", image: "https://cdn.pixabay.com/photo/2016/07/20/19/33/lavender-1531093_1280.jpg", cost: 12 },
                { name: "Thym", image: "https://cdn.pixabay.com/photo/2017/04/24/13/28/thyme-2256504_1280.jpg", cost: 5 },
                { name: "Sauge", image: "https://cdn.pixabay.com/photo/2015/09/24/18/23/sage-956108_1280.jpg", cost: 7 }
            ]
        }
    ];

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    return (
        <div>
            {!showCart ? (
                <div className="product-list-container">
                    <nav className="navbar">
                        <h1>e-plantShopping</h1>
                        <div className="cart-icon" onClick={handleCartClick}>
                            <a href="#">
                                <h1 className="cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                        <rect width="156" height="156" fill="none"></rect>
                                        <circle cx="80" cy="216" r="12"></circle>
                                        <circle cx="184" cy="216" r="12"></circle>
                                        <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.3A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path>
                                    </svg>
                                    <span className="cart_quantity_count">{totalItems}</span>
                                </h1>
                            </a>
                        </div>
                    </nav>

                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2 className="category-title">{category.category}</h2>
                            <div className="product-grid">
                                {category.plants.map((plant, i) => (
                                    <div className="product-card" key={i}>
                                        <img src={plant.image} alt={plant.name} className="product-image" />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-price">{plant.cost} €</div>
                                        <button className="product-button" onClick={() => dispatch(addItem(plant))}>
                                            Ajouter au panier
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;
