import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList'; // Assurez-vous d'avoir ce fichier
import AboutUs from './AboutUs';

function App() {
  // État pour savoir si on affiche la page d'accueil ou la liste des produits
  const [showProductList, setShowProductList] = useState(false);

  const handleStart = () => {
    // Cette ligne change l'état pour afficher la liste des produits
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Affichage conditionnel : si showProductList est faux, on montre l'accueil */}
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <h1>Paradise Nursery</h1>
            <p>Où chaque plante trouve sa maison</p>
            
            {/* Le bouton "Commencer" qui déclenche la logique */}
            <button className="start-button" onClick={handleStart}>
              Commencer
            </button>

            <AboutUs />
          </div>
        </div>
      ) : (
        /* Si showProductList est vrai, on affiche le composant ProductList */
        <div className="product-screen">
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;
