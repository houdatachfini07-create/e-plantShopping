import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calcule le montant total pour tous les articles du panier
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  // Gère le bouton "Continuer vos achats"
  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Incrémente la quantité d'un article
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Décrémente la quantité d'un article ou le supprime si elle atteint 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Supprime un article du panier
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calcule le coût total pour un type d'article spécifique (quantité * prix)
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  // Affiche l'alerte pour le bouton de paiement
  const handleCheckoutShopping = (e) => {
    alert('Fonctionnalité à venir : Merci de votre patience !');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Montant total du panier : {calculateTotalAmount()} €</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost} €</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Sous-total : {calculateTotalCost(item)} €</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continuer vos achats</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Passer à la caisse</button>
      </div>
    </div>
  );
};

export default CartItem;
