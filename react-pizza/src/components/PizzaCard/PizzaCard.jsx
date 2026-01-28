const PizzaCard = ({ pizza, onAddToCart, cartItem, onClickAdd }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* <img
          src={pizza.imageUrl}
          alt={pizza.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        /> */}
        <div className="w-full h-48 flex items-center justify-center text-6xl mb-4 bg-gray-100 rounded-lg">
          {pizza.imageUrl}
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{pizza.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">{pizza.price} ₴</span>
          <button
            className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            onClick={() => {
              onClickAdd();
              onAddToCart(pizza);
            }}>
            <span>+</span>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
