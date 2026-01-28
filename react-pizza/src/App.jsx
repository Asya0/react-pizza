import React from 'react';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import PizzaCard from './components/PizzaCard/PizzaCard';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { CATEGORIES } from './constants/categories';
import { pizzas } from './constants/pizzas';

const App = () => {
  const cart = [];
  const filteredItems = pizzas;
  const totalPrice = 0;
  const totalItems = 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header totalPrice={totalPrice} cartItemsCount={totalItems} />

        <div className="py-8">
          <div className="mb-10">
            <Filters
              categories={CATEGORIES}
              activeCategory={CATEGORIES[0].id}
              onCategoryChange={() => {}}
              sortBy="popular"
              onSortChange={() => {}}
            />
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((pizza) => (
                <PizzaCard
                  key={pizza.id}
                  pizza={pizza}
                  onAddToCart={() => {}}
                  cartItem={undefined}
                  onClickAdd={() => {}}
                />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <Cart
              cart={cart}
              onRemoveFromCart={() => {}}
              onUpdateQuantity={() => {}}
              totalPrice={totalPrice}
              onOrder={() => {}}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
