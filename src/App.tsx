import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = (): void => {
    setIsOpen(true);
  };

  const closeCart = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar openCart={openCart} closeCart={closeCart} />
      <ShoppingCart closeCart={closeCart} isOpen={isOpen} />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </>
  );
}
Home;
export default App;
