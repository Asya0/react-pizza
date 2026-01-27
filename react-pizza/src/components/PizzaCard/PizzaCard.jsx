const PizzaCard = ({ pizza, onAddToCart, cartItem }) => {
  return (
    <div
      className="
      group
      bg-white rounded-2xl overflow-hidden
      shadow-md hover:shadow-xl
      transition-all duration-300
      hover:-translate-y-1
      flex flex-col
    ">
      <div
        className="
        relative
        h-56 bg-gradient-to-br from-orange-50 to-red-50
        flex items-center justify-center
        p-6
      ">
        <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
          {pizza.imageUrl}
        </span>

        <div className="absolute top-4 left-4 right-4 flex justify-between">
          {pizza.isNew && (
            <span
              className="
              bg-green-500 text-white
              px-3 py-1 rounded-full
              text-xs font-bold uppercase
              shadow-md
            ">
              НОВИНКА
            </span>
          )}

          {pizza.isSpicy && (
            <span
              className="
              bg-gradient-to-r from-red-500 to-orange-500
              text-white
              px-3 py-1 rounded-full
              text-xs font-bold uppercase
              shadow-md
              flex items-center gap-1
            ">
              🌶️ ОСТРАЯ
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{pizza.name}</h3>

        <div className="flex items-center mb-3">
          <div className="flex text-orange-400 text-lg">
            {'★'.repeat(Math.floor(pizza.rating))}
            <span className="text-gray-300">{'★'.repeat(5 - Math.floor(pizza.rating))}</span>
          </div>
          <span className="ml-2 text-sm font-medium text-gray-600">{pizza.rating}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{getDescription(pizza.category)}</p>
      </div>

      <div
        className="
        p-5 pt-0
        flex items-center justify-between
        border-t border-gray-100
      ">
        <div>
          <span className="text-sm text-gray-500">от</span>
          <span className="text-2xl font-bold text-gray-800 ml-1">{pizza.price} ₴</span>
        </div>

        <button
          className={`
            relative
            flex items-center justify-center
            px-5 py-3 rounded-full
            font-semibold text-base
            transition-all duration-200
            ${
              cartItem
                ? 'bg-orange-500 text-white hover:bg-orange-600'
                : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
            }
            hover:shadow-md
            active:scale-95
            min-w-[120px]
          `}
          onClick={() => onAddToCart(pizza)}>
          Добавить
          {cartItem && (
            <span
              className="
              absolute -top-2 -right-2
              w-7 h-7 flex items-center justify-center
              bg-white text-orange-500
              rounded-full text-sm font-bold
              border-2 border-orange-500
            ">
              {cartItem.quantity}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

const getDescription = (category) => {
  const descriptions = {
    meat: 'Томатный соус, сыр моцарелла, пепперони',
    cheese: 'Сливочный соус, смесь сыров',
    grill: 'Соус барбекю, курица, бекон, лук',
    veg: 'Томаты, болгарский перец, грибы, маслины',
    spicy: 'Острый соус, халапеньо, перец чили',
    closed: 'Закрытая пицца с начинкой внутри',
  };
  return descriptions[category] || '';
};

export default PizzaCard;
