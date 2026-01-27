import React from 'react';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import PizzaCard from './components/PizzaCard/PizzaCard';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import useCart from './hooks/useCart';
import useFilter from './hooks/useFilter';
import { CATEGORIES } from './constants/categories';
import { pizzas } from './constants/pizzas';

const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  const { activeCategory, setActiveCategory, sortBy, setSortBy, filteredItems } = useFilter(pizzas);

  const handleOrder = () => {
    alert('Заказ оформлен!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header totalPrice={totalPrice} cartItemsCount={totalItems} />

        <div className="py-8">
          <div className="mb-10">
            <Filters
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((pizza) => (
                <PizzaCard
                  key={pizza.id}
                  pizza={pizza}
                  onAddToCart={addToCart}
                  cartItem={cart.find((item) => item.id === pizza.id)}
                />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <Cart
              cart={cart}
              onRemoveFromCart={removeFromCart}
              onUpdateQuantity={updateQuantity}
              totalPrice={totalPrice}
              onOrder={handleOrder}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
