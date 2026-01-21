import React, { useState } from 'react';

const App = () => {
  // Состояния для товаров, фильтров и корзины
  const [pizzas] = useState([
    {
      id: 1,
      name: 'Пепперони',
      category: 'meat',
      price: 289,
      rating: 4.8,
      imageUrl: '🍕',
      isNew: false,
      isSpicy: true,
    },
    {
      id: 2,
      name: 'Маргарита',
      category: 'cheese',
      price: 249,
      rating: 4.6,
      imageUrl: '🧀',
      isNew: true,
      isSpicy: false,
    },
    {
      id: 3,
      name: 'Чикен Барбекю',
      category: 'grill',
      price: 329,
      rating: 4.9,
      imageUrl: '🍗',
      isNew: false,
      isSpicy: false,
    },
    {
      id: 4,
      name: 'Вегетарианская',
      category: 'veg',
      price: 269,
      rating: 4.5,
      imageUrl: '🥦',
      isNew: false,
      isSpicy: false,
    },
    {
      id: 5,
      name: 'Мексиканская',
      category: 'spicy',
      price: 299,
      rating: 4.7,
      imageUrl: '🌶️',
      isNew: false,
      isSpicy: true,
    },
    {
      id: 6,
      name: '4 Сыра',
      category: 'cheese',
      price: 319,
      rating: 4.8,
      imageUrl: '🧀',
      isNew: true,
      isSpicy: false,
    },
    {
      id: 7,
      name: 'Карбонара',
      category: 'meat',
      price: 349,
      rating: 4.9,
      imageUrl: '🥓',
      isNew: false,
      isSpicy: false,
    },
    {
      id: 8,
      name: 'Гавайская',
      category: 'closed',
      price: 279,
      rating: 4.4,
      imageUrl: '🍍',
      isNew: false,
      isSpicy: false,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // Функция для добавления в корзину
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  // Функция для удаления из корзины
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Функция для изменения количества
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          if (newQuantity < 1) return item; // Не даем уйти ниже 1
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  // Фильтрация и сортировка пицц
  const filteredPizzas = pizzas.filter(
    (pizza) => activeCategory === 'all' || pizza.category === activeCategory,
  );

  const sortedPizzas = [...filteredPizzas].sort((a, b) => {
    if (sortBy === 'popular') return b.rating - a.rating;
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Подсчет общей суммы
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Категории для фильтров
  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'meat', name: 'Мясные' },
    { id: 'cheese', name: 'Сырные' },
    { id: 'grill', name: 'Гриль' },
    { id: 'veg', name: 'Вегетарианские' },
    { id: 'spicy', name: 'Острые' },
    { id: 'closed', name: 'Закрытые' },
  ];

  return (
    <div style={styles.app}>
      {/* Шапка сайта */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <h1 style={styles.logoText}>React Pizza</h1>
          <p style={styles.logoSubtext}>лучшая пицца в вашем селе</p>
        </div>

        <div style={styles.cartInfo}>
          <div style={styles.cartTotal}>
            <span style={styles.totalPrice}>{totalPrice} ₴</span>
            <span style={styles.totalItems}>
              {cart.reduce((sum, item) => sum + item.quantity, 0)} шт.
            </span>
          </div>
          <button style={styles.accountButton}>
            <span style={styles.accountIcon}>👤</span>
            Личный кабинет
          </button>
        </div>
      </header>

      <main style={styles.main}>
        {/* Фильтры по категориям */}
        <section style={styles.filtersSection}>
          <div style={styles.categories}>
            {categories.map((category) => (
              <button
                key={category.id}
                style={{
                  ...styles.categoryButton,
                  ...(activeCategory === category.id ? styles.categoryButtonActive : {}),
                }}
                onClick={() => setActiveCategory(category.id)}>
                {category.name}
              </button>
            ))}
          </div>

          {/* Сортировка */}
          <div style={styles.sortContainer}>
            <span style={styles.sortLabel}>Сортировать по:</span>
            <select
              style={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}>
              <option value="popular">популярности</option>
              <option value="price">цене</option>
              <option value="name">названию</option>
            </select>
          </div>
        </section>

        {/* Сетка пицц */}
        <section style={styles.pizzaGrid}>
          {sortedPizzas.map((pizza) => (
            <div key={pizza.id} style={styles.pizzaCard}>
              <div style={styles.pizzaImageContainer}>
                <span style={styles.pizzaEmoji}>{pizza.imageUrl}</span>
                {pizza.isNew && <span style={styles.newBadge}>НОВИНКА</span>}
                {pizza.isSpicy && <span style={styles.spicyBadge}>🌶️ ОСТРАЯ</span>}
              </div>

              <div style={styles.pizzaInfo}>
                <h3 style={styles.pizzaName}>{pizza.name}</h3>
                <div style={styles.pizzaRating}>
                  {'★'.repeat(Math.floor(pizza.rating))}
                  <span style={{ color: '#ccc' }}>{'★'.repeat(5 - Math.floor(pizza.rating))}</span>
                  <span style={styles.ratingValue}> {pizza.rating}</span>
                </div>
                <p style={styles.pizzaDescription}>
                  {pizza.category === 'meat' && 'Томатный соус, сыр моцарелла, пепперони'}
                  {pizza.category === 'cheese' && 'Сливочный соус, смесь сыров'}
                  {pizza.category === 'grill' && 'Соус барбекю, курица, бекон, лук'}
                  {pizza.category === 'veg' && 'Томаты, болгарский перец, грибы, маслины'}
                  {pizza.category === 'spicy' && 'Острый соус, халапеньо, перец чили'}
                  {pizza.category === 'closed' && 'Закрытая пицца с начинкой внутри'}
                </p>
              </div>

              <div style={styles.pizzaFooter}>
                <span style={styles.pizzaPrice}>от {pizza.price} ₴</span>
                <button style={styles.addButton} onClick={() => addToCart(pizza)}>
                  Добавить
                  {cart.some((item) => item.id === pizza.id) && (
                    <span style={styles.cartCount}>
                      {cart.find((item) => item.id === pizza.id)?.quantity || 0}
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Корзина */}
        {cart.length > 0 && (
          <section style={styles.cartSection}>
            <h2 style={styles.cartTitle}>Ваш заказ</h2>
            <div style={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <div style={styles.cartItemInfo}>
                    <span style={styles.cartItemName}>{item.name}</span>
                    <span style={styles.cartItemPrice}>
                      {item.price} ₴ × {item.quantity}
                    </span>
                  </div>

                  <div style={styles.cartItemControls}>
                    <button
                      style={styles.quantityButton}
                      onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span style={styles.itemQuantity}>{item.quantity}</span>
                    <button
                      style={styles.quantityButton}
                      onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                    <span style={styles.itemTotal}>{item.price * item.quantity} ₴</span>
                    <button style={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                      ×
                    </button>
                  </div>
                </div>
              ))}

              <div style={styles.cartTotalRow}>
                <span style={styles.totalLabel}>Итого:</span>
                <span style={styles.totalValue}>{totalPrice} ₴</span>
              </div>

              <button style={styles.orderButton}>Оформить заказ</button>
            </div>
          </section>
        )}
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} React Pizza. Все права защищены.</p>
        <p>Доставка по всему селу в течение 60 минут</p>
      </footer>
    </div>
  );
};

// Стили в JSX формате
const styles = {
  app: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },

  // Шапка
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderBottom: '2px solid #ff6b35',
    marginBottom: '30px',
  },
  logoText: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#ff6b35',
    margin: 0,
  },
  logoSubtext: {
    fontSize: '14px',
    color: '#666',
    margin: '5px 0 0 0',
  },
  cartInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  cartTotal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  totalPrice: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  totalItems: {
    fontSize: '14px',
    color: '#666',
  },
  accountButton: {
    backgroundColor: '#fff',
    border: '2px solid #ff6b35',
    color: '#ff6b35',
    padding: '10px 20px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s',
  },
  accountIcon: {
    fontSize: '18px',
  },

  // Фильтры
  filtersSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '20px',
  },
  categories: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  categoryButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: '#fff',
    color: '#333',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  categoryButtonActive: {
    backgroundColor: '#ff6b35',
    color: '#fff',
  },
  sortContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  sortLabel: {
    fontSize: '14px',
    color: '#666',
  },
  sortSelect: {
    padding: '8px 15px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
  },

  // Карточки пицц
  pizzaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '50px',
  },
  pizzaCard: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  pizzaImageContainer: {
    height: '200px',
    backgroundColor: '#fff8f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  pizzaEmoji: {
    fontSize: '80px',
  },
  newBadge: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: '#4cd964',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  spicyBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: '#ff3b30',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  pizzaInfo: {
    padding: '20px',
    flexGrow: 1,
  },
  pizzaName: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '0 0 10px 0',
    color: '#333',
  },
  pizzaRating: {
    fontSize: '18px',
    color: '#ffcc00',
    marginBottom: '10px',
  },
  ratingValue: {
    fontSize: '14px',
    color: '#666',
    marginLeft: '5px',
  },
  pizzaDescription: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
    margin: 0,
  },
  pizzaFooter: {
    padding: '20px',
    borderTop: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pizzaPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#ff6b35',
    color: '#fff',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background-color 0.3s',
    position: 'relative',
  },
  cartCount: {
    backgroundColor: '#fff',
    color: '#ff6b35',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
  },

  // Корзина
  cartSection: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    marginBottom: '40px',
  },
  cartTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
    color: '#333',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #eee',
  },
  cartItemInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  cartItemName: {
    fontSize: '18px',
    fontWeight: '500',
    color: '#333',
  },
  cartItemPrice: {
    fontSize: '14px',
    color: '#666',
  },
  cartItemControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  quantityButton: {
    width: '30px',
    height: '30px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    borderRadius: '50%',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemQuantity: {
    fontSize: '16px',
    fontWeight: '500',
    minWidth: '30px',
    textAlign: 'center',
  },
  itemTotal: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    minWidth: '80px',
    textAlign: 'right',
  },
  removeButton: {
    backgroundColor: '#ff3b30',
    color: '#fff',
    border: 'none',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartTotalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    borderTop: '2px solid #eee',
    marginTop: '10px',
  },
  totalLabel: {
    fontSize: '20px',
    fontWeight: '500',
    color: '#333',
  },
  totalValue: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ff6b35',
  },
  orderButton: {
    backgroundColor: '#ff6b35',
    color: '#fff',
    border: 'none',
    padding: '18px',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.3s',
    marginTop: '10px',
  },

  // Футер
  footer: {
    textAlign: 'center',
    padding: '30px 0',
    color: '#666',
    fontSize: '14px',
    borderTop: '1px solid #eee',
  },
};

export default App;
