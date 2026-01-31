import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/Homepage';
import CartPage from './pages/CartPage/CartPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

// http://localhost:3001/pizza // используем json-server

const App = () => {
  const totalPrice = 0;
  const totalItems = 0;
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header totalPrice={totalPrice} cartItemsCount={totalItems} />
        <Routes>
          <Route path="/" element={<HomePage totalPrice={totalPrice} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
