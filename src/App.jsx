import React from 'react';
import './App.css';
import AboutUs from './AboutUs'; // Importation du composant de la Q2

function App() {
  const handleStart = () => {
    console.log("Navigation vers la liste des produits...");
    // Plus tard, vous ajouterez ici la logique pour changer de page
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <div className="divider"></div>
      <p>Où chaque plante trouve sa maison</p>
      
      <button className="start-button" onClick={handleStart}>
        Commencer
      </button>

      {/* On peut inclure AboutUs ici ou sur une autre page */}
      <div style={{marginTop: '50px', maxWidth: '800px'}}>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;