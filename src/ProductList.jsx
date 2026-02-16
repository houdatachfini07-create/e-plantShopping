import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './App.css'; // Pour le style des cartes

const plants = [
  { name: 'Fougère', cost: 15, image: 'https://images.unsplash.com/photo-1512428813833-df4d24190339?q=80&w=200' },
  { name: 'Succulente', cost: 10, image: 'https://images.unsplash.com/photo-1520302630591-fd1c66ed11a3?q=80&w=200' },
  { name: 'Monstera', cost: 25, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=200' },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>Nos Plantes Tropicales</h2>
      <div className="product-grid">
        {plants.map((plant) => (
          <div key={plant.name} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.cost} €</p>
            <button onClick={() => dispatch(addItem(plant))}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;