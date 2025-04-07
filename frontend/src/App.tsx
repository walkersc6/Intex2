import './App.css';
import CompetitionPage from './pages/CompetitionPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductPage from './pages/ProductPage';
// import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes> 
          <Route path="/competition" element={<CompetitionPage />} />
      
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;