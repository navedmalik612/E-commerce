import React, { useState } from 'react';
import './App.css';
import Picture from './Picture';

function App() {
  const [cart, setCart] = useState([]);
  const [picturesData, setPicturesData] = useState([
    { id: 1, name: 'Tulips', price: 250, image: '/images/tulip.jpg' },
    { id: 2, name: 'Hydrangea', price: 390, image: '/images/hydrangea.jpg' },
    { id: 3, name: 'Roses', price: 570, image: '/images/roses.jpg' },
    { id: 4, name: 'Lily', price: 600, image: '/images/lily.jpg' },
    { id: 5, name: 'Daisy', price: 370, image: '/images/daisy.jpg' },
    { id: 6, name: 'Carnation', price: 590, image: '/images/carnation.jpg' },
    { id: 7, name: 'Orchid', price: 450, image: '/images/orchid.jpg' },
    { id: 8, name: 'Peony', price: 800, image: '/images/peonies.jpg' }
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (picture) => {
    setCart([...cart, picture]);
    setTotalPrice(totalPrice + picture.price);
  };

  const removeFromWebsite = (pictureId) => {
    setPicturesData((prevPicturesData) =>
      prevPicturesData.filter((picture) => picture.id !== pictureId)
    );
  };

  const pay = () => {
    alert(`Total Price: Rs.${totalPrice}`);

    setCart([]);
    setTotalPrice(0);

    cart.forEach((item) => removeFromWebsite(item.id));
  };

  return (
    <div className="App">
      <h1>Ferns and Petals</h1>
      <div className="pictures">
        {picturesData.map((picture) => (
          <Picture key={picture.id} picture={picture} onBuyClick={addToCart} />
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>{item.name} - Rs.{item.price}</li>
          ))}
        </ul>
        <p>Total Price: Rs.{totalPrice}</p>
        <button onClick={pay}>Pay</button>
      </div>
    </div>
  );
}

export default App;
