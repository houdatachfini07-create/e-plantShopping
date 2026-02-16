import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div className="cart-container">
      <h2>Votre Panier</h2>
      <div>
        {cart.map(item => (
          <div key={item.name} className="cart-item">
            <img src={item.image} alt={item.name} style={{width: '50px'}} />
            <div>
              <h4>{item.name}</h4>
              <p>Prix: {item.cost} €</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p>Sous-total: {item.cost * item.quantity} €</p>
              <button onClick={() => dispatch(removeItem(item.name))}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <h3>Total de la commande : {calculateTotal()} €</h3>
      <button onClick={() => alert('Fonctionnalité de paiement à venir !')}>
        Passer à la caisse
      </button>
    </div>
  );
}

export default CartItem;