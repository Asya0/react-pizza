import React, { useEffect, useState } from 'react';

import Filters from '../../components/Filters/Filters';
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import Skeleton from '../../components/PizzaCard/Skeleton';
import Cart from '../../components/Cart/Cart';
import { pizzas } from '../../constants/pizzas.json';

const HomePage = (totalPrice) => {
  const cart = [];
  const filteredItems = pizzas;
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [sortType, setSortType] = useState(0);

  //   console.log(category);

  useEffect(() => {
    // fetch(`http://localhost:3001/pizzas`)
    fetch(`http://localhost:3001/pizzas?category=` + category)
      .then((res) => res.json())
      .then((pizza) => {
        console.log(pizza);
        setItems(pizza);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); // помогает, например, из корзины попадать на вверх HomePage
  }, [category]);

  return (
    <div className="py-8">
      <div className="mb-10">
        <Filters
          sortType={sortType}
          categoryId={category}
          onClickCategory={(id) => setCategory(id)}
          onCategoryChange={() => {}}
        />
      </div>

      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((pizza, i) =>
            isLoading ? (
              <Skeleton key={i} />
            ) : (
              <PizzaCard
                key={pizza.id}
                pizza={pizza}
                onAddToCart={() => {}}
                cartItem={undefined}
                onClickAdd={() => {}}
              />
            ),
          )}
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
  );
};
export default HomePage;
