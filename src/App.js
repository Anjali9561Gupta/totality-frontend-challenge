// import React, { useState } from 'react';
// import PropertyList from './components/PropertyList';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout';
// import Filters from './components/Filters';
// import Header from './components/Header';
// import './App.css';

// function App() {
//   const [cart, setCart] = useState([]);
//   const [filters, setFilters] = useState({ location: '', priceRange: [0, 1000], bedrooms: 0 });

//   const addToCart = (property) => {
//     setCart([...cart, property]);
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   const updateFilters = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Filters updateFilters={updateFilters} />
//       <PropertyList addToCart={addToCart} filters={filters} />
//       <Cart cart={cart} removeFromCart={removeFromCart} />
//       <Checkout cart={cart} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Filters from './components/Filters';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import Register from './components/Register';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ location: '', priceRange: [0, 1000], bedrooms: 0 });
  const { user } = useContext(AuthContext);

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Filters updateFilters={updateFilters} />
              <PropertyList addToCart={addToCart} filters={filters} />
              <Cart cart={cart} removeFromCart={removeFromCart} />
              <Checkout cart={cart} />
            </>
          } />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;